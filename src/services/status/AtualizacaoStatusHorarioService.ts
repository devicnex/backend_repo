import prismaClient from "../../prisma";
import { EnvioCancelEmailService } from "../../clinica-petland/services/email/EnvioCancelamentoEmail";
import { EnvioNotificacaoCancelamentoService } from "../../clinica-petland/services/notificacao/EnvioNotificacaoCancelamento"

    class AtualizacaoStatusHorarioService {
        async execute(id: string, status: number): Promise<boolean> {
            if (![0, 1, 2, 3, 4].includes(status)) {
                throw new Error("Status inválido!");
            }
        
            try {
                const horario = await prismaClient.horarios.findUnique({
                    where: { id },
                    include: {
                        agendamentos: {
                            include: {
                                users: true,
                                pets: true,
                                clinicas: true,
                            },
                        },
                    },
                });
        
                if (!horario) {
                    throw new Error("Horário não encontrado.");
                }
        
                // Status 0: Expirado sem agendamento
                if (status === 0) {
                    if (horario.agendamentos.length > 0) {
                        throw new Error("Não é possível expirar um horário que já possui agendamento.");
                    }
        
                    const atualizaStatus = await prismaClient.horarios.update({
                        where: { id },
                        data: { status },
                    });
        
                    return atualizaStatus !== null;
                }
        
                // Status 3: Cancelamento
                if (status === 3) {
                    const agendamento = horario.agendamentos[0];
                    const paciente = agendamento?.users;
        
                    if (horario.status === 2 && paciente) {
                        const envioEmail = new EnvioCancelEmailService();
                        await envioEmail.execute({
                            email: paciente.email,
                            nomePaciente: paciente.name,
                            dataAgendamento: horario.data_servico,
                            horaAgendamento: horario.horario_servico,
                        });
        
                        console.log(`Email de cancelamento enviado para: ${paciente.email}`);
        
                        const expoToken = await prismaClient.expoToken.findUnique({
                            where: {
                                user_id: paciente.id
                            }
                        });
        
                        if (expoToken?.token) {
                            const envioNotificacao = new EnvioNotificacaoCancelamentoService();
                            await envioNotificacao.execute({
                                token: expoToken.token,
                                nomePaciente: paciente.name,
                                data: horario.data_servico,
                                hora: horario.horario_servico
                            });
                        } else {
                            console.log("⚠️ Nenhum token de notificação encontrado para o paciente.");
                        }
                    }
        
                    const atualizaStatus = await prismaClient.horarios.update({
                        where: { id },
                        data: { status },
                    });
        
                    return atualizaStatus !== null;
                }
        
                // Alternância STATUS (1 ou 2)
                if (status === 1 || status === 2) {
                    const atualizaStatus = await prismaClient.horarios.updateMany({
                        where: {
                            id,
                            status: status === 1 ? 2 : 1,
                        },
                        data: {
                            status,
                        },
                    });
        
                    return atualizaStatus.count > 0;
                }
        
                // STATUS 4: consulta realizada
                if (status === 4) {
                    const atualizaStatus = await prismaClient.horarios.update({
                        where: { id },
                        data: { status },
                    });
        
                    return atualizaStatus !== null;
                }
        
                return false;
            } catch (err) {
                console.error("Erro ao atualizar status do horário:", err);
                throw new Error("Erro ao atualizar status do horário.");
            }
        }
    }    

export { AtualizacaoStatusHorarioService };

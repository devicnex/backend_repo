import cron from "node-cron";
import { DeleteHorarioService } from "../clinica-petland/services/agendamento/DeleteHorariosService";

export const deleteHorarioCron = cron.schedule("0 9 * * *", async() => {

    const deleteHorario = new DeleteHorarioService();
    try{
        const horario = await deleteHorario.execute();
        console.log(`Cron executado com sucesso. Horários deletados: ${horario.count}`);
    } catch(err){
        console.error("Erro ao executar cron de deletar horários:", err);
    }
})
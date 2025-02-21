import prismaClient from "../../prisma";
import { addMonths, addYears, parse, format } from "date-fns";

interface VaccineRequest {
  data_vacinacao: string;
  vacina: string;
  clinica: string;
  intervalo: string;
  img_lote: string;
  observacao: string;
  pet_id: string;
  user_id: string;
}

class RegisterVaccinesService {
  async execute({ data_vacinacao, vacina, clinica, intervalo, img_lote, observacao, pet_id, user_id }: VaccineRequest) {
    
    // ✅ Converter `data_vacinacao` para Date
    const dataVacinacaoDate = parse(data_vacinacao, "dd/MM/yyyy", new Date());

    // ✅ Calcular `proxima_aplicacao` automaticamente
    let proximaAplicacao: Date;
    switch (intervalo.toLowerCase()) {
      case "mensal":
        proximaAplicacao = addMonths(dataVacinacaoDate, 1);
        break;
      case "anual":
        proximaAplicacao = addYears(dataVacinacaoDate, 1);
        break;
      case "trimestral":
        proximaAplicacao = addMonths(dataVacinacaoDate, 3);
        break;
      case "21 dias":
        proximaAplicacao = addMonths(dataVacinacaoDate, 0);
        proximaAplicacao.setDate(proximaAplicacao.getDate() + 21);
        break;
      default:
        proximaAplicacao = dataVacinacaoDate;
    }

    const proxima_aplicacao = format(proximaAplicacao, "dd/MM/yyyy");

    // ✅ Salvar no banco de dados com `proxima_aplicacao`
    const vacinas = await prismaClient.vacina.create({
      data: {
        data_vacinacao,
        vacina,
        clinica,
        intervalo,
        img_lote,
        observacao,
        pet_id,
        user_id,
        proxima_aplicacao, // ✅ Agora a próxima aplicação já é calculada automaticamente
      },
      select: {
        id: true,
        data_vacinacao: true,
        proxima_aplicacao: true,
        vacina: true,
        clinica: true,
        intervalo: true,
        img_lote: true,
        observacao: true,
        pet_id: true,
        user_id: true
      }
    });

    return vacinas;
  }
}

export { RegisterVaccinesService };

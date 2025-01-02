import prismaClient from "../../prisma";

interface VaccineRequest {
  data_vacinacao: string;
  vacina: string;
  clinica: string;
  intervalo: string;
  img_lote: string;
  observacao: string;
  pet_id: string;
}

class RegisterVaccinesService {
  async execute({ data_vacinacao, vacina, clinica, intervalo, img_lote, observacao, pet_id }: VaccineRequest) {
    const vacinas = await prismaClient.vacina.create({
      data: {
        data_vacinacao: data_vacinacao,
        vacina: vacina,
        clinica: clinica,
        intervalo: intervalo,
        img_lote: img_lote,
        observacao: observacao,
        pet_id: pet_id,
      },
      select: {
        data_vacinacao: true,
        vacina: true,
        clinica: true,
        intervalo: true,
        img_lote: true,
        observacao: true,
        pet_id: true,
      }
    });
    return vacinas;
  }
}

export { RegisterVaccinesService };

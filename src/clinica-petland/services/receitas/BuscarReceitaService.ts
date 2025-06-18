import prismaClient from "../../../prisma/";

export class BuscarReceitaService {

  async execute(id: string) {
    const receita = await prismaClient.receitas.findUnique({
      where: { id },
      include: {veterinario: true}
    });
    return receita;
  }
}
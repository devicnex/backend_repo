import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import prismaClient from "../../../prisma/";

export const ReceitasService = async (data: {
  id_veterinario: string;
  tutorNome: string;
  tutorCPF: string;
  petNome: string;
  especie: string;
  raca: string;
  sexo: string;
  peso: string;
  uso: string;
}) => {
  const veterinario = await prismaClient.veterinarios.findUnique({
    where: { id: data.id_veterinario }
  });

  if (!veterinario) throw new Error("Veterinário não encontrado");

  const id = uuidv4();
  const fileName = `${id}.pdf`;
  const dirPath = path.join(process.cwd(), 'tmp', 'receitas');
  const filePath = path.join(dirPath, fileName);
  const publicUrl = `https://clinica.petland.vet.br/tmp/receitas/${fileName}`;

  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // 🔷 Cabeçalho - Nome e CRMV
  page.drawText(`${veterinario.nome}`, {
    x: 60,
    y: height - 50,
    size: 14,
    font,
    color: rgb(0.1, 0.2, 0.4) // azul escuro
  });
  page.drawText(`CRMV: ${veterinario.crmv}`, {
    x: 60,
    y: height - 65,
    size: 10,
    font,
    color: rgb(0.3, 0.3, 0.3)
  });

  // 🔷 Campos com linhas e cores
  const drawLine = (y: number) => {
    page.drawLine({
      start: { x: 30, y },
      end: { x: width - 30, y },
      thickness: 0.7,
      color: rgb(0.8, 0.8, 0.8)
    });
  };

  const startY = height - 100;
  const lineHeight = 20;

  page.drawText("Paciente:", { x: 30, y: startY, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.petNome, { x: 95, y: startY, size: 11, font });

  page.drawText("Espécie:", { x: 200, y: startY, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.especie, { x: 255, y: startY, size: 11, font });

  page.drawText("Sexo:", { x: 400, y: startY, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.sexo, { x: 445, y: startY, size: 11, font });

  drawLine(startY - 5);

  page.drawText("Raça:", { x: 30, y: startY - lineHeight, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.raca, { x: 95, y: startY - lineHeight, size: 11, font });

  page.drawText("Peso:", { x: 200, y: startY - lineHeight, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.peso, { x: 255, y: startY - lineHeight, size: 11, font });

  drawLine(startY - lineHeight - 5);

  page.drawText("Tutor:", { x: 30, y: startY - lineHeight * 2, size: 11, font, color: rgb(0, 0.184, 0.38) });
  page.drawText(data.tutorNome, { x: 95, y: startY - lineHeight * 2, size: 11, font });

  drawLine(startY - lineHeight * 2 - 5);

  let y = startY - lineHeight * 3 - 10;
  page.drawText("Prescrição:", {
    x: 30,
    y,
    size: 11,
    font,
    color: rgb(0, 0.184, 0.38)
  });
  y -= 16;
  data.uso.split("\n").forEach((linha) => {
    page.drawText(`- ${linha}`, {
      x: 40,
      y,
      size: 11,
      font,
      color: rgb(0.1, 0.1, 0.1)
    });
    y -= 14;
  });

    // ✍️ Linhas para data e assinatura
  const linhaY = 150;
  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR");

  // Linha da data
  page.drawLine({
    start: { x: 50, y: linhaY },
    end: { x: 200, y: linhaY },
    thickness: 0.8,
    color: rgb(0, 0, 0)
  });
  page.drawText("Data da geração", {
    x: 90,
    y: linhaY - 12,
    size: 10,
    font,
    color: rgb(0, 0, 0)
  });
  page.drawText(dataFormatada, {
    x: 95,
    y: linhaY + 4,
    size: 10,
    font,
    color: rgb(0, 0, 0)
  });

  // Linha da assinatura
  page.drawLine({
    start: { x: 340, y: linhaY },
    end: { x: 490, y: linhaY },
    thickness: 0.8,
    color: rgb(0, 0, 0)
  });
  page.drawText("Assinatura ou carimbo", {
    x: 360,
    y: linhaY - 12,
    size: 10,
    font,
    color: rgb(0, 0, 0)
  });

  // 🔻 Rodapé colorido
  const contatoY = 30;
  page.drawText(`WhatsApp: ${veterinario.telefone || "(00) 00000-0000"}`, {
    x: 30,
    y: contatoY,
    size: 9,
    font,
    color: rgb(0, 0, 0)
  });

  page.drawText(`Email: ${veterinario.email || "email@exemplo.com"}`, {
    x: 230,
    y: contatoY,
    size: 9,
    font,
    color: rgb(0, 0, 0)
  });

  page.drawText(`Endereço: Alameda dos Chanés, 140`, {
    x: 420,
    y: contatoY,
    size: 9,
    font,
    color: rgb(0, 0, 0)
  });

  page.drawRectangle({
    x: 0,           
    y: 0,           
    width: width,   
    height: 20,     
    color: rgb(0.0, 0.4, 0.8)
  });

  // 💾 Salvar PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(filePath, pdfBytes);

  // 🔄 Registrar no banco
  const receitaCriada = await prismaClient.receitas.create({
    data: {
      tutorNome: data.tutorNome,
      tutorCPF: data.tutorCPF,
      petNome: data.petNome,
      especie: data.especie,
      raca: data.raca,
      sexo: data.sexo,
      peso: data.peso,
      uso: data.uso,
      pdfUrl: publicUrl,
      id_veterinario: data.id_veterinario
    },
  });

  return { id: receitaCriada.id, url: publicUrl };
};

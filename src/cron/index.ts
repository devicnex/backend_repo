import { lembreteCron } from './lembrete';
import { prevencaoLembrete } from './lembretePrevensoes';

export const iniciarCron = () => {
    console.log("Iniciando o Cron");
    lembreteCron.start();
    prevencaoLembrete.start();
}


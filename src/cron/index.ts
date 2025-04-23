import { lembreteCron } from './lembrete';
import { prevencaoLembrete } from './lembretePrevensoes';
import { cancelaHorarioCron } from './cancelaHorario';

export const iniciarCron = () => {
    console.log("Iniciando o Cron");
    lembreteCron.start();
    prevencaoLembrete.start();
    cancelaHorarioCron.start();
}


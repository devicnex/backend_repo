import { lembreteCron } from './lembrete';

export const iniciarCron = () => {
    console.log("Iniciando o Cron");
    lembreteCron.start();
}


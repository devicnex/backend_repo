import cron from 'node-cron';

export const lembreteCron = cron.schedule('* * * * *', () => {
    console.log('TA RODANDO O CROON!')
})


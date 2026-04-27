export const WA_TEMPLATES = {
    CONFIRMATION_24H: (name, date, time, dentist) =>
        `Olá ${name}, aqui é da Inova.\n\n` +
        `Amanhã às *${time}* é o seu momento reservado com o Dr(a). ${dentist}.\n\n` +
        `💎 *Importante:* A agenda do Dr(a). é extremamente concorrida e separamos este horário *exclusivamente* para você.\n\n` +
        `Caso tenha surgido algum imprevisto, nos avise agora para liberarmos a vaga para a lista de espera.\n\n` +
        `*Podemos contar com sua presença?*`,

    REMINDER_2H: (name, time) =>
        `Tudo pronto para te receber, ${name}! 🌟\n\n` +
        `Sua sala já está sendo preparada. Seu atendimento começa às *${time}*.\n\n` +
        `💡 *Dica:* Chegue 10 minutos antes para tomar um café conosco e iniciar seu atendimento com tranquilidade.\n\n` +
        `Até logo!`,

    REVIEW_REQUEST: (name) =>
        `Foi um prazer cuidar do seu sorriso hoje, ${name}!\n\n` +
        `Buscamos sempre a excelência. Se puder, nos conte como foi sua experiência em 15 segundos:\n\n` +
        `https://g.page/r/SeuLinkDoGoogle/review\n\n` +
        `Tenha um dia incrível!`,

    RECOVERY_MISSED: (name) =>
        `Oi ${name}, notamos que você não conseguiu comparecer hoje.\n\n` +
        `Como nossos horários são muito disputados, infelizmente perdemos essa janela. Mas não queremos que sua saúde bucal fique para trás.\n\n` +
        `Temos uma vaga extra que surgiu para esta semana. Faz sentido para você?\n\n` +
        `Aguardo seu retorno para segurá-la.`
};

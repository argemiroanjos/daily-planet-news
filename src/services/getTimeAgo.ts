// Função para converter o formato da data da notícia para "1 dia atrás"
const getTimeAgo = (dateString: string) => {
  // Converte a string de data para number
  const [day, month, year, hour, minute, second] = dateString
    .split(/[\/ :]/)
    .map(part => parseInt(part, 10));

  // Cria um objeto Date com a data da notícia calculada para o formato
  const newsDate = new Date(year, month - 1, day, hour, minute, second);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - newsDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    return "Hoje";
  } else if (daysAgo === 1) {
    return "1 dia atrás";
  } else {
    return `${daysAgo} dias atrás`;
  }
};

export default getTimeAgo;

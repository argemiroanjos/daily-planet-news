import { useEffect, useState } from "react";
import { typeNewsItens } from "../types";
import fetchAPINewsData from "../services/fetchAPI";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";
import getTimeAgo from "../services/getTimeAgo";

function MainCard() {
  const [news, setNews] = useState<typeNewsItens[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPINewsData();
        setNews(data);
      } catch (error) {
      alert("Erro ao buscar notícias.");
    }
  }
    fetchData();
}, []);

// Pega a primeira notícia da lista
const firstNews = news[0];

// Função para converter o formato da imagem de introdução da notícia
const getImageIntroURL = (item: typeNewsItens) => {
  if (item?.imagens) {
    const images = JSON.parse(item.imagens);
    return images?.image_intro;
  }
  return null;
};

  return (
    <NewsContainer>
      <Card sx={{ maxWidth: 350, marginBottom: 16}}>
        {getImageIntroURL(news[0]) && (
          <img src={`https://agenciadenoticias.ibge.gov.br/${getImageIntroURL(news[0])}`} alt="Imagem de introdução" />
        )}
      </Card>
      {firstNews && (
        <Card sx={{ maxWidth: 350, marginBottom: 16}}>
          <CardContent>
            <Typography variant="h6" component="div">
              {firstNews.titulo}
            </Typography>
            <Typography color="text.secondary">
              {firstNews.introducao}
            </Typography>
            <Typography color="text.secondary">
            {getTimeAgo(firstNews.data_publicacao)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={firstNews.link} target="_blank" rel="noopener noreferrer">
              Leia mais
            </Button>
          </CardActions>
        </Card>
      )}
    </NewsContainer>
  );
};

export default MainCard;

import { useEffect } from "react";
import { Dispatch, StoreType, TypeNewsItens } from "../types";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";
import getTimeAgo from "../services/getTimeAgo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPINewsData } from "../redux/actions";

function MainCard() {
  const dispatch: Dispatch = useDispatch();
  const {items} = useSelector((state: StoreType) => state.news);

  // Busca as notícias retornadas pela API
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchAPINewsData());
      } catch (error) {
      alert("Erro ao buscar notícias.");
    }
  }
    fetchData();
}, []);

  // Pega a primeira notícia da lista
  const firstNews = items[0];

  // Função para converter o formato da imagem de introdução da notícia
  const getImageIntroURL = (item: TypeNewsItens) => {
    if (item?.imagens) {
      const images = JSON.parse(item.imagens);
      return images?.image_intro;
    }
    return null;
  };

  return (
    <NewsContainer>
      <Card sx={{ maxWidth: 350, marginBottom: 16}}>
        {getImageIntroURL(items[0]) && (
          <img src={`https://agenciadenoticias.ibge.gov.br/${getImageIntroURL(items[0])}`} alt="Imagem de introdução" />
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

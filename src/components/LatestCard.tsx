import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { NewsContainer } from "../styles/NewCardsStyle";
import { Dispatch, StoreType, TypeNewsItens } from "../types";
import getTimeAgo from "../services/getTimeAgo";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteNews, fetchAPINewsData, removeFavoriteNews } from "../redux/actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function LatestCard() {
  const dispatch: Dispatch = useDispatch();
  const {favoriteNews} = useSelector((state: StoreType) => state.news);
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

  // Função para validar se a notícia está favoritada
  const handleFavoriteToggle = (idFavorite: number) => {
    if (favoriteNews.includes(idFavorite) ) {
      dispatch(removeFavoriteNews(idFavorite));
    } else {
      dispatch(addFavoriteNews(idFavorite));
    }
  };

  return (
    <NewsContainer>
      {items.slice(1).map((item: TypeNewsItens) => (
        <Card key={item.id} sx={{ maxWidth: 350, marginBottom: 16}}>
          <CardContent>
            <Typography variant="h6" component="div">
              {item.titulo}
            </Typography>
            <Typography color="text.secondary">
              {item.introducao}
            </Typography>
            <Typography color="text.secondary">
              {getTimeAgo(item.data_publicacao)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={item.link} target="_blank" rel="noopener noreferrer">
              Leia mais
            </Button>
            <Button
            size="small"
            onClick={() => handleFavoriteToggle(item.id)}
            >
              {favoriteNews.includes(item.id) ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
              
            </Button>
          </CardActions>
        </Card>
      ))}
    </NewsContainer>
  );
};

export default LatestCard;

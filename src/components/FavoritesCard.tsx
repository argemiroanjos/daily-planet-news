import { useDispatch, useSelector } from "react-redux";
import { Dispatch, StoreType } from "../types";
import { useEffect } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import getTimeAgo from "../services/getTimeAgo";
import { addFavoriteNews, fetchAPINewsData, removeFavoriteNews } from "../redux/actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoritesCard() {
  const dispatch: Dispatch = useDispatch();
  const {favoriteNews, items} = useSelector((state: StoreType) => state.news);

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

  // Filtra as notícias favoritas pelo id
 const favoriteIds = items.filter((item) => favoriteNews.includes(item.id));

  return (
    <div>
    {favoriteIds && (
      favoriteIds.map((item) => (
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
      ))
    )}
    </div>
  );
}

export default FavoritesCard;

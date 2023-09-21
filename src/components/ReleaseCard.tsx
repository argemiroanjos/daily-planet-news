import { useEffect, useState } from "react";
import { Dispatch, StoreType, TypeNewsItens } from "../types";
import { Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";
import getTimeAgo from "../services/getTimeAgo";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteNews, fetchAPINewsData, removeFavoriteNews } from "../redux/actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const getCategories = ['Release'];

function ReleaseNews() {
  const dispatch: Dispatch = useDispatch();
  const {favoriteNews} = useSelector((state: StoreType) => state.news);
  const {items} = useSelector((state: StoreType) => state.news);
  const [selectCategory] = useState<string>(getCategories[0]);

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

  // Filtrando as notícias por categoria
  const filteredNews = items.filter((item) => item.tipo === selectCategory);

  // Função para validar se a notícia está favoritada
  const handleFavoriteToggle = async (idFavorite: number) => {
    if (favoriteNews.includes(idFavorite) ) {
      await dispatch(removeFavoriteNews(idFavorite));
    } else {
      await dispatch(addFavoriteNews(idFavorite));
    }
  };

  return (
    <NewsContainer>
      {filteredNews.map((item: TypeNewsItens) => (
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
}

export default ReleaseNews;

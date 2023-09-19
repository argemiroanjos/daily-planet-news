import { useEffect, useState } from "react";
import { typeNewsItens } from "../types";
import fetchAPINewsData from "../services/fetchAPI";
import { Button, Card, CardActions, CardContent, Tab, Tabs, Typography} from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";
import getTimeAgo from "../services/getTimeAgo";

const getCategories = ['Release'];

function ReleaseNews() {
  const [news, setNews] = useState<typeNewsItens[]>([]);
  const [selectCategory, setSelectCategory] = useState<string>(getCategories[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPINewsData();
        const newData = data.slice(1);
        setNews(newData);
      } catch (error) {
      alert("Erro ao buscar notícias.");
    }
  }
    fetchData();
}, []);

// Filtrando as notícias por categoria
const filteredNews = news.filter((item) => item.tipo === selectCategory);

  return (
    <NewsContainer>
      {filteredNews.map((item: typeNewsItens) => (
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
          </CardActions>
        </Card>
      ))}
    </NewsContainer>
  );
}

export default ReleaseNews;

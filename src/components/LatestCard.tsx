import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import fetchAPINewsData from "../services/fetchAPI";
import { NewsContainer } from "../styles/NewCardsStyle";
import { typeNewsItens } from "../types";
import getTimeAgo from "../services/getTimeAgo";

function LatestCard() {
  const [news, setNews] = useState<typeNewsItens[]>([]);

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

  return (
    <NewsContainer>
      {news.map((item: typeNewsItens) => (
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
};

export default LatestCard;

import { useEffect, useState } from "react";
import { typeNewsItens } from "../types";
import fetchAPINewsData from "../services/fetchAPI";
import { Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";

function NewCards() {
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
                  {item.data_publicacao}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.link} target="_blank" rel="noopener noreferrer">
                  Leia a notícia aqui
                </Button>
              </CardActions>
            </Card>
          ))}
      </NewsContainer>
  );
}

export default NewCards;

import { useEffect, useState } from "react";
import { typeNewsItens } from "../types";
import fetchAPINewsData from "../services/fetchAPI";
import { Button, Card, CardActions, CardContent, Tab, Tabs, Typography} from "@mui/material";
import { NewsContainer } from "../styles/NewCardsStyle";
import getTimeAgo from "../services/getTimeAgo";
import LatestCard from "./LatestCard";
import ReleaseNews from "./ReleaseCard";
import NoticiaNews from "./NoticiaCard";
import { Favorite } from "@mui/icons-material";
import FavoritesCard from "./FavoritesCard";

const getCategories = ['Mais recentes', 'Release', 'Notícia', 'Favoritas'];

function NewCards() {
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

const renderCategory = () => {
  switch (selectCategory) {
    case 'Mais recentes':
      return <LatestCard />;
    case 'Release':
      return <ReleaseNews />;
    case 'Notícia':
      return <NoticiaNews />;
    case 'Favoritas':
      return <FavoritesCard />;
    default:
      return null;
  }
};

  return (
    <>
      <Tabs
        value={selectCategory}
        onChange={(event, newValue) => {
          setSelectCategory(newValue);
        }}
      >
      {getCategories.map((category: string) => (
        <Tab key={category} label={category} value={category} />
      ))}
      </Tabs>
      {renderCategory()}
    </>
  );
}

export default NewCards;

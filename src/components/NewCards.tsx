import { useEffect, useState } from "react";
import { Dispatch } from "../types";
import { Tab, Tabs} from "@mui/material";
import LatestCard from "./LatestCard";
import ReleaseNews from "./ReleaseCard";
import NoticiaNews from "./NoticiaCard";
import FavoritesCard from "./FavoritesCard";
import { useDispatch } from "react-redux";
import { fetchAPINewsData } from "../redux/actions";

const getCategories = ['Mais recentes', 'Release', 'Notícia', 'Favoritas'];

function NewCards() {
  const dispatch: Dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState<string>(getCategories[0]);

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

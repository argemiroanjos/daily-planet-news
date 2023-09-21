import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import GlobalStyle from './styles/globalStyle';
import { Dispatch, StoreType } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStorageFavoriteNews } from './redux/actions';

function App() {
  const dispatch: Dispatch = useDispatch();
  const {favoriteNews} = useSelector((state: StoreType) => state.news);
  const LocalStorageIds = JSON.parse(localStorage.getItem('favoriteNews') || '[]');

  // Atualiza o localStorage com as notícias favoritas quando necessário,
  // e carrega as notícias favoritas armazenadas ao iniciar.
  useEffect(() => {
    if (favoriteNews.length > 0) {
      localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
    } else {
      if (LocalStorageIds.length > 0 && !favoriteNews.length) {
        dispatch(getStorageFavoriteNews());
      }
    }
  }, [favoriteNews]);

  return (
    <>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App;


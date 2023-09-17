import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import GlobalStyle from './styles/globalStyle';

function App() {
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


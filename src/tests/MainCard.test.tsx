import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import MainCard from '../components/MainCard';
import { Provider } from 'react-redux';
import store from '../redux';
import { mockNews } from './mocks/mockNews';

describe('Verifica o funcionamento correto do componente MainCard', () => {
  
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockNews),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    });

  test('Verifica se o componente MainCard é renderizado', () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <MainCard />
      </Provider>,
    );
  });
})

test('Verifica se a primeira notícia é exibida', () => {
  renderWithRouterAndRedux(
    <Provider store={ store }>
      <MainCard />
    </Provider>,
  );

  const firstNews = mockNews.items[0];

  const newsTitle = screen.getByText(firstNews.titulo);
  const newsIntroduction = screen.getByText(firstNews.introducao);
  const imageNews = screen.getByRole('img', { name: /Imagem de introdução/i });
  const loadMoreBtn = screen.getByText(/Leia mais/i);

  expect(newsTitle).toBeInTheDocument();
  expect(newsIntroduction).toBeInTheDocument();
  expect(imageNews).toBeInTheDocument();
  expect(loadMoreBtn).toBeInTheDocument();
});

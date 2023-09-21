import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import { Provider } from 'react-redux';
import store from '../redux';
import { mockNews } from './mocks/mockNews';
import NewCards from '../components/NewCards';

describe('Verifica o funcionamento correto do componente NewCards', () => {
  
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockNews),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    });

  test('Verifica se renderiza as tabs de categoria', () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <NewCards />
      </Provider>,
    );

    const tabLatest = screen.getByRole('tab', { name: /Mais recentes/i });
    const tabRelease = screen.getByRole('tab', { name: /Release/i });
    const tabNoticia = screen.getByRole('tab', { name: /Notícia/i });
    const tabFavoritas = screen.getByRole('tab', { name: /Favoritas/i });

    expect(tabLatest).toBeInTheDocument();
    expect(tabRelease).toBeInTheDocument();
    expect(tabNoticia).toBeInTheDocument();
    expect(tabFavoritas).toBeInTheDocument();
  });
})
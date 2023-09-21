import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import { Provider } from 'react-redux';
import store from '../redux';
import { mockNews } from './mocks/mockNews';
import App from '../App';

describe('Verifica o funcionamento correto do componente LatestCard', () => {
  
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockNews),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    });

  test('Verifica se o componente LatestCard renderiza as notícias mais recentes', async () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <App />
      </Provider>,
    );

    const titleFirstNews = await screen.findByText('Rebanhos e valor dos principais produto de origem animal foram recordes em 2022'); 
    expect(titleFirstNews).toBeInTheDocument();

    const titleSecondNews = await screen.findByText('Servidores do IBGE no RS se mobilizam para ajudar desabrigados nas enchentes');
    expect(titleSecondNews).toBeInTheDocument();

    const titleThirdNews = await screen.findByText('IBGE: mais de 180 mil candidatos farão provas neste domingo, em todo o país');
    expect(titleThirdNews).toBeInTheDocument();
  });
});

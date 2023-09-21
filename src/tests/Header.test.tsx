import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from '../redux';
import { mockNews } from './mocks/mockNews';

describe('Verifica o funcionamento correto do componente Header', () => {
  
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockNews),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    });

  test('Verifica se existe o título "Daily Planet News"', () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <Header />
      </Provider>,
    );

    const title = screen.getByText(/Daily Planet News/i);
    expect(title).toBeInTheDocument();
  });
})
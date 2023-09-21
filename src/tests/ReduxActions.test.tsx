import { Provider } from 'react-redux';
import { vi } from 'vitest';
import store from '../redux';
import { mockNews } from './mocks/mockNews';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import App from '../App';

describe('Verifica Actions e o Estado Global', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mockNews),
  });

  it('Verifica se há atualização do estado global ao acessar o App', async () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <App />
      </Provider>,
    );
    expect(store.getState().news).toHaveProperty('items');
    expect(store.getState().news).toHaveProperty('favoriteNews');
  });
});

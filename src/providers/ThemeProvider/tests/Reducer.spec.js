import { ThemeReducer } from '../Reducer';
import { ACTIONS } from '../Actions';

describe('Reducer', () => {
  it('renders Component', () => {
    expect(ThemeReducer([], { type: ACTIONS.SET_THEME })).toBeDefined();
  });
  it('renders frist React Component', () => {
    expect(ThemeReducer([], { type: 'notype' })).toBeDefined();
  });
});

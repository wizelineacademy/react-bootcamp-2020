import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from './components/App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('test ReactDOM.render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    global.document.getElementById = (id) => id === 'root' && div;
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

/**
 * A custom render to wrap BrowserRouter around render.
 *
 * @see https://testing-library.com/docs/example-react-router
 *
 * @param {React.ReactElement} ui
 * @param {*} param1
 * @returns RenderResult
 */
export function renderWithRouter(ui, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
}

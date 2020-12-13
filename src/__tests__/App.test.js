import React from 'react';
import { render } from '@testing-library/react';

import App from '../components/App/App.component';
import { mock } from '../__mocks__/mockYoutubeAPI';

describe('Render App', () => {
  it('Renders app', () => {
    mock();
    render(<App />);
  });
});

import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import AuthProvider from '../../providers/Auth/Auth.provider';
import VideoProvider from '../../providers/Video/Video.provider';
import UserPreferencesProvider from '../../providers/Preferences/UserPreferences.provider';
import { mock } from '../mockYoutubeAPI';

function mount(component, path = '/') {
  mock();
  return render(
    <AuthProvider>
      <VideoProvider>
        <UserPreferencesProvider>
          <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>
        </UserPreferencesProvider>
      </VideoProvider>
    </AuthProvider>
  );
}

function mountComponentWithRouter(component, history, path) {
  mock();
  return render(
    <AuthProvider>
      <VideoProvider>
        <UserPreferencesProvider>
          <Router history={history}>
            <Route exact path={path}>
              {component}
            </Route>
          </Router>
        </UserPreferencesProvider>
      </VideoProvider>
    </AuthProvider>
  );
}

export { mount, mountComponentWithRouter };

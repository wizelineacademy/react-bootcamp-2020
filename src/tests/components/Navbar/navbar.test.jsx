import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Navbar from '../../../components/Navbar';
import VideoProvider from '../../../providers/Video';
import LocalThemeProvider from '../../../providers/Theme';
import AuthProvider from '../../../providers/Auth';

describe('Navbar component', () => {
  it('Displays the navbar with information', () => {
    act(() => {
      render(
        <HashRouter>
          <AuthProvider>
            <VideoProvider>
              <LocalThemeProvider>
                <Navbar />
              </LocalThemeProvider>
            </VideoProvider>
          </AuthProvider>
        </HashRouter>
      );
    });
    expect(screen.getByText('Academy project')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Login')).toBeTruthy();
  });

  // it('Clicks on card and fires event', () => {
  //   const onClick = jest.fn();
  //   render(
  //     <HashRouter>
  //       <Card
  //         key={videoMock.videoId}
  //         videoId={videoMock.videoId}
  //         title={videoMock.title}
  //         description={videoMock.description}
  //         imageUrl={videoMock.imageUrl}
  //         onClick={onClick}
  //         isFavorit={videoMock}
  //       />
  //     </HashRouter>
  //   );
  //   const card = screen.getByRole('heading');
  //   fireEvent.click(card);
  //   expect(onClick).toHaveBeenCalledTimes(1);
  // });
});

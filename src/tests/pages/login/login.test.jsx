import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import LoginPage from '../../../pages/Login';
import AuthProvider from '../../../providers/Auth';

describe('login page', () => {
  it('Displays the login form', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByText('Welcome back!')).toBeTruthy();
    expect(screen.getByText('username')).toBeTruthy();
    expect(screen.getByText('password')).toBeTruthy();
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getByLabelText('password')).toBeTruthy();
  });

  // it("Clicks on card and fires event", () => {
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
  //   const card = screen.getByRole("heading");
  //   fireEvent.click(card);
  //   expect(onClick).toHaveBeenCalledTimes(1);
  // });
});

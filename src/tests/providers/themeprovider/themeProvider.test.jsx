import React, { useContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { render, within, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ThemeProvider, { ThemeContext } from '../../../providers/Theme';
import AuthProvider from '../../../providers/Auth';

describe('local theme provider', () => {
  it('sets initialy dark theme', () => {
    const TestComponent = () => {
      const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
      const handleChangeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
      };
      return (
        <>
          <h1 data-testid="value">{`${isDarkTheme}`}</h1>
          <input
            id="checkbox"
            type="checkbox"
            onChange={(event) => handleChangeTheme(event.target.value)}
            checked={isDarkTheme}
          />
        </>
      );
    };
    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <ThemeProvider>
            <TestComponent />
          </ThemeProvider>
        </AuthProvider>
      </HashRouter>
    );

    const { getByText } = within(getByTestId('value'));
    expect(getByText('true')).toBeInTheDocument();
  });

  it('changes initialy dark theme to light', () => {
    const TestComponent = () => {
      const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
      const handleChangeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
      };
      return (
        <>
          <h1 data-testid="value">{`${isDarkTheme}`}</h1>
          <input
            id="checkbox"
            type="checkbox"
            onChange={(event) => handleChangeTheme(event.target.value)}
            checked={isDarkTheme}
          />
        </>
      );
    };
    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <ThemeProvider>
            <TestComponent />
          </ThemeProvider>
        </AuthProvider>
      </HashRouter>
    );

    const { getByText } = within(getByTestId('value'));
    expect(getByText('true')).toBeInTheDocument();
    const check = screen.getByRole('checkbox');
    act(() => {
      fireEvent.click(check);
    });
    expect(getByText('false')).toBeInTheDocument();
  });
});

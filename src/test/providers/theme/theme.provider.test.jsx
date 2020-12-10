import React, { useContext } from 'react';
import { render, within, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import ThemeProvider, { ThemeContext } from '../../../providers/theme';
import { setTheme } from '../../../providers/theme/theme.actions';

describe('Local theme provider', () => {
  it('Set default(light) theme', () => {
    const TestComponent = () => {
      const { themeState } = useContext(ThemeContext);

      return <div data-testid='themeName'>{`${themeState.themeName}`}</div>;
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const { getByText } = within(getByTestId('themeName'));
    expect(getByText('default')).toBeInTheDocument();
  });

  it('Change default theme to dark', () => {
    const TestComponent = () => {
      const { themeState, themeDispatch } = useContext(ThemeContext);

      const handleChangeTheme = () => {
        themeDispatch(setTheme('dark'));
      };

      return (
        <>
          <p data-testid='themeName'>{`${themeState.themeName}`}</p>
          <button
            type='button'
            data-testid='changeThemeButton'
            onClick={handleChangeTheme}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const { getByText } = within(getByTestId('themeName'));
    expect(getByText('default')).toBeInTheDocument();
    const changeThemeButton = screen.getByTestId('changeThemeButton');
    act(() => {
      fireEvent.click(changeThemeButton);
    });
    expect(getByText('dark')).toBeInTheDocument();
  });

  it('Change default theme to light', () => {
    const TestComponent = () => {
      const { themeState, themeDispatch } = useContext(ThemeContext);

      const handleChangeTheme = () => {
        themeDispatch(setTheme('light'));
      };

      return (
        <>
          <p data-testid='themeName'>{`${themeState.themeName}`}</p>
          <button
            type='button'
            data-testid='changeThemeButton'
            onClick={handleChangeTheme}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const { getByText } = within(getByTestId('themeName'));
    expect(getByText('default')).toBeInTheDocument();
    const changeThemeButton = screen.getByTestId('changeThemeButton');
    act(() => {
      fireEvent.click(changeThemeButton);
    });
    expect(getByText('light')).toBeInTheDocument();
  });

  it('Change default theme to unknown and default vaulue', () => {
    const TestComponent = () => {
      const { themeState, themeDispatch } = useContext(ThemeContext);

      const handleChangeTheme = () => {
        themeDispatch(setTheme('unknown'));
      };

      return (
        <>
          <p data-testid='themeName'>{`${themeState.themeName}`}</p>
          <button
            type='button'
            data-testid='changeThemeButton'
            onClick={handleChangeTheme}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const { getByText } = within(getByTestId('themeName'));
    expect(getByText('default')).toBeInTheDocument();
    const changeThemeButton = screen.getByTestId('changeThemeButton');
    act(() => {
      fireEvent.click(changeThemeButton);
    });
    expect(getByText('default')).toBeInTheDocument();
  });
});

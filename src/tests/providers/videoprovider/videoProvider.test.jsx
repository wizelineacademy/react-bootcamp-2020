import React, { useContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { render, within, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import VideoProvider, { VideoContext } from '../../../providers/Video';

import AuthProvider from '../../../providers/Auth';

describe('Video provider', () => {
  it('sets initial search term to Wizeline', () => {
    const TestComponent = () => {
      const { searchTerm, setSearchTerm } = useContext(VideoContext);
      const handleChangeSearchInput = (value) => {
        setSearchTerm(value);
      };
      return (
        <>
          <h1 data-testid="value">{searchTerm}</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => handleChangeSearchInput(event.target.value)}
          />
        </>
      );
    };
    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <TestComponent />
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    );

    const { getByText } = within(getByTestId('value'));
    expect(getByText('Wizeline')).toBeInTheDocument();
  });

  it('sets initial state to undefined value', () => {
    const TestComponent = () => {
      const { searchTerm, setSearchTerm } = useContext(VideoContext);

      const handleChangeSearchInput = (value) => {
        setSearchTerm(value);
      };

      return (
        <>
          <h1 data-testid="value">{searchTerm}</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => handleChangeSearchInput(event.target.value)}
          />
        </>
      );
    };
    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <TestComponent />
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    );
    const { getByText } = within(getByTestId('value'));

    const input = screen.getByRole('textbox');
    act(() => {
      fireEvent.change(input, { target: { value: 'hello' } });
    });
    expect(screen.getByDisplayValue('hello')).toBeTruthy();
    expect(getByText('hello')).toBeInTheDocument();
  });
});

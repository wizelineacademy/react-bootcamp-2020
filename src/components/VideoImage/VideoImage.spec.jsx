import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoImage from './VideoImage.component';
import videos from '../../dummyData/videos';
import { AuthProvider } from '../../contexts/authContext/authContext';

describe('testing dates.js file', () => {
  describe('First group of tests', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn((key) => {
            if (key === '1-lookLater-izA4_K7CiHc') return 'true';
            return '{"id":1}';
          }),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
    });
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('must render de component with the button to add to watch later if the user is logged in', async () => {
      const video = videos.items[0];
      const {
        snippet: {
          thumbnails: {
            default: { url: thumbnail },
          },
          title,
        },
      } = video;
      render(
        <AuthProvider value={{ user: { id: 1 } }}>
          <VideoImage
            showButtons
            video={video}
            readLaterText="watch later"
            addedLaterText="added"
            alt="Contemplative Reptile"
            height="180"
            image={thumbnail}
            title={title}
          />
        </AuthProvider>
      );
      const element = screen.getByTestId('buttonText');
      expect(element).toBeTruthy();
    });
    test('must render de component with the text "added" if the video was selected', async () => {
      const video = videos.items[0];
      const {
        snippet: {
          thumbnails: {
            default: { url: thumbnail },
          },
          title,
        },
      } = video;
      render(
        <AuthProvider value={{ user: { id: 1 } }}>
          <VideoImage
            showButtons
            video={video}
            readLaterText="watch later"
            addedLaterText="added"
            alt="Contemplative Reptile"
            height="180"
            image={thumbnail}
            title={title}
          />
        </AuthProvider>
      );
      const element = screen.getByTestId('buttonText');
      expect(element).toHaveTextContent('added');
    });
  });
  describe('Second group of tests', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn((key) => {
            if (key === '1-lookLater-izA4_K7CiHc') return 'false';
            return '{"id":1}';
          }),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
    });
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('must render de component with the button to add to watch later if the user is logged in', async () => {
      const video = videos.items[0];
      const {
        snippet: {
          thumbnails: {
            default: { url: thumbnail },
          },
          title,
        },
      } = video;
      render(
        <AuthProvider value={{ user: { id: 1 } }}>
          <VideoImage
            showButtons
            video={video}
            readLaterText="watch later"
            addedLaterText="added"
            alt="Contemplative Reptile"
            height="180"
            image={thumbnail}
            title={title}
          />
        </AuthProvider>
      );
      const element = screen.getByTestId('buttonText');
      expect(element).toHaveTextContent('watch later');
    });
  });
});

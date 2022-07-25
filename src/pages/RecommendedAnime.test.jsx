import { render, screen, waitFor } from '@testing-library/react';
import RecommendedAnime from './RecommendedAnime';
import { MemoryRouter } from 'react-router-dom';

describe('RecommendedAnime Page', () => {
  it('should render animes names when api responds', async () => {
    render(
      <MemoryRouter>
        <RecommendedAnime />
      </MemoryRouter>,
    );
    await waitFor(() => {
      screen.getByText('Violet Evergarden');
    });
  });
});

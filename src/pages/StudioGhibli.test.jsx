import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import StudioGhibli from '../pages/StudioGhibli';
import { MemoryRouter } from 'react-router-dom';

it('should correctly set default option', () => {
  render(
    <MemoryRouter>
      <StudioGhibli />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole('tab', { name: '-- Select Director --' }).selected,
  ).toBe(true);
});
it('should display the correct number of options', () => {
  render(
    <MemoryRouter>
      <StudioGhibli />
    </MemoryRouter>,
  );
  expect(screen.getAllByRole('tab').length).toBe(7);
});
it('should allow user to change directors', () => {
  render(
    <MemoryRouter>
      <StudioGhibli />
    </MemoryRouter>,
  );
  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('tab', { name: 'Gorō Miyazaki' }),
  );
  expect(screen.getByRole('tab', { name: 'Gorō Miyazaki' }).selected).toBe(
    true,
  );
});

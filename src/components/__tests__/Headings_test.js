import React from 'react';
import { render } from 'react-testing-library';
import Headings from '../Headings';

const movieStubs = {
  oneWordTitle: {
    Type: 'movie',
    Title: 'Godzilla',
  },
  multiWordTitle: {
    Type: 'movie',
    Title: 'Enter The Void',
  },
  titleWithNumberAsSecondWord: {
    Type: 'movie',
    Title: 'Scream 2',
  },
  titleWithColonAfterSecondWord: {
    Type: 'movie',
    Title: 'The Godfather: Part II',
  },
  tvShow: {
    Type: 'series',
    Title: 'The Sopranos',
  },
};

describe('Titles are formatted correctly', () => {
  test('One-word film title', () => {
    const { container, getByText, queryByText } = render(
      <Headings movie={movieStubs.oneWordTitle} />,
    );

    expect(getByText('FILM')).not.toBe(null);
    expect(queryByText('TV')).toBe(null);
    expect(getByText('Godzilla')).not.toBe(null);
    expect(
      Array.from(container.querySelectorAll('.movie-listing__title')),
    ).toHaveLength(1);
  });

  test('Multi-word title', () => {
    const { container, getByText, queryByText } = render(
      <Headings movie={movieStubs.multiWordTitle} />,
    );

    expect(getByText('Enter')).not.toBe(null);
    expect(getByText('The Void')).not.toBe(null);
    expect(queryByText('Enter The')).toBe(null);
    expect(
      Array.from(container.querySelectorAll('.movie-listing__title')),
    ).toHaveLength(2);
  });

  test('Title with number as the second word', () => {
    const { container, getByText } = render(
      <Headings movie={movieStubs.titleWithNumberAsSecondWord} />,
    );

    expect(getByText('Scream 2')).not.toBe(null);
    expect(
      Array.from(container.querySelectorAll('.movie-listing__title')),
    ).toHaveLength(1);
  });

  test('Title with colon after the second word', () => {
    const { container, getByText } = render(
      <Headings movie={movieStubs.titleWithColonAfterSecondWord} />,
    );

    expect(getByText('The Godfather:')).not.toBe(null);
    expect(getByText('Part II')).not.toBe(null);
    expect(
      Array.from(container.querySelectorAll('.movie-listing__title')),
    ).toHaveLength(2);
  });

  test('TV show', () => {
    const { container, getByText, queryByText } = render(
      <Headings movie={movieStubs.tvShow} />,
    );

    expect(getByText('TV')).not.toBe(null);
    expect(getByText('The')).not.toBe(null);
    expect(getByText('Sopranos')).not.toBe(null);
    expect(queryByText('The Sopranos')).toBe(null);
    expect(
      Array.from(container.querySelectorAll('.movie-listing__title')),
    ).toHaveLength(2);
  });
});

// Test file for the MovieRow component
import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import nock from 'nock'
import MovieRow from '../components/MovieRow'
import RouterComponent from '../lib/utils'

describe('MovieRow', () => {
  beforeEach(() => {
    nock('https://api.themoviedb.org/3')
    .get(`/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, {
      results: [
        { id:75780, title: 'Jack Reacher', poster_path: '/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg' },
        { id:12345, title: 'Batman', poster_path: '/batmanposter.jpg' }
      ]
    });
  })

  test('Should render all movie tiles', async () => {
    const category = {title: 'Popular on Netflix', url: '/movie/popular', id: 456}
    const {queryByText, getAllByTestId, findByTestId} = render(
      <RouterComponent>
        <MovieRow category={category}></MovieRow>
      </RouterComponent>
    )

    let movieTiles
    movieTiles = await waitForElement(() => getAllByTestId(/movie-tile/i));
    expect(movieTiles).toHaveLength(2)
  })

  test('Should render all the correct row title', async () => {
    const category = {title: 'Popular on Netflix', url: '/movie/popular', id: 456}
    const {queryByText, getAllByTestId, queryByTestId} = render(
      <RouterComponent>
        <MovieRow category={category}></MovieRow>
      </RouterComponent>
    )
    // ensure that we wait for all movie tiles to complete mounting
    await waitForElement(() => getAllByTestId(/movie-tile/i));

    // Execute assertion
    expect(queryByText(/Popular/i)).not.toBeNull()
  })
});

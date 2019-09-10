// Test file for the MovieDetails component
import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import nock from 'nock'
import MovieDetails from '../components/MovieDetails'

describe('MovieDetails', () => {
  const match = {
    params: {
      id: 12345
    }
  }

  beforeEach(() => {
    nock('https://api.themoviedb.org/3')
    .get(`/movie/${match.params.id}/videos?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, { results: [{ key: 54321 }] });
  })

  test('Should render the video player', async () => {
    const {queryByText, queryByTestId, findByTestId} = render(
      <MovieDetails match={match}></MovieDetails>
    )

    let movieDetails
    movieDetails = await waitForElement(() => queryByTestId('movie-details'));

    // Make sure we wait for the child component ResponsivePlayer to complete mounting
    let reactPlayer
    reactPlayer = await waitForElement(() => queryByTestId('react-player'));

    // Execute assertion
    expect(movieDetails).not.toBeNull()
  })

  test('Should render the ResponsivePlayer child component', async () => {
    const {queryByText, queryByTestId, findByTestId} = render(
      <MovieDetails match={match}></MovieDetails>
    )

    let movieDetails
    movieDetails = await waitForElement(() => queryByTestId('movie-details'));

    // Make sure we wait for the child component ResponsivePlayer to complete mounting
    let reactPlayer
    reactPlayer = await waitForElement(() => queryByTestId('react-player'));

    // Execute assertion
    expect(reactPlayer).not.toBeNull()
  })
});

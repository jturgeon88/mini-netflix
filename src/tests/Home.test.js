// Test file for the MovieTile component
import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import nock from 'nock'
import Home from '../components/Home'
import RouterComponent from '../lib/utils'

describe('description', function() {
  beforeEach(() => {
    nock('https://api.themoviedb.org/3')
    .get(`/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, { results: [{ id:75780, title: 'Jack Reacher', poster_path: '/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg' }] });

    nock('https://api.themoviedb.org/3')
    .get(`/movie/upcoming?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, { results: [{ id:75780, title: 'Jack Reacher', poster_path: '/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg' }] });

    nock('https://api.themoviedb.org/3')
    .get(`/search/movie?language=en-US&page=1&query=Jack+Reacher&api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, { results: [{ id:75780, title: 'Jack Reacher', poster_path: '/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg' }] });
  })

  test('Should render all movie rows', async () => {
    const {queryByText, queryAllByTestId} = render(
      <RouterComponent>
        <Home></Home>
      </RouterComponent>
    )

    let movieRows
    await waitForElement(() => movieRows = queryAllByTestId(/movie-row/i));
    await expect(movieRows).toHaveLength(3)
  })

  test('Should render all movie row titles', () => {
    const {queryByText} = render(
      <RouterComponent>
        <Home></Home>
      </RouterComponent>
    )

    expect(queryByText(/My List/i)).not.toBeNull()
    expect(queryByText(/Popular/i)).not.toBeNull()
    expect(queryByText(/Upcoming/i)).not.toBeNull()
  })
});

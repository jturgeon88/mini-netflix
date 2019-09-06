// Test file for the HeaderNav
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../components/App'

test('Movies link routes to correct page', () => {
  const {queryByText} = render(
    <App></App>
  )

  const moviesButton = queryByText(/movies/i)
  fireEvent.click(moviesButton)
  expect(queryByText(/movies page placeholder/i)).not.toBeNull()
})

test('Series link routes to correct page', () => {
  const {queryByText} = render(
    <App></App>
  )

  const seriesButton = queryByText(/series/i)
  fireEvent.click(seriesButton)
  expect(queryByText(/series page placeholder/i)).not.toBeNull()
})

test('My List link routes to correct page', () => {
  const {queryByText} = render(
    <App></App>
  )

  const myListButton = queryByText(/my list/i)
  fireEvent.click(myListButton)
  expect(queryByText(/my list page placeholder/i)).not.toBeNull()
})

test('Home link routes to correct page', () => {
  const {queryByText, queryAllByTestId} = render(
    <App></App>
  )

  const homeButton = queryByText(/home/i)
  fireEvent.click(homeButton)
  expect(queryAllByTestId(/movie-row/i)).toHaveLength(3)
})

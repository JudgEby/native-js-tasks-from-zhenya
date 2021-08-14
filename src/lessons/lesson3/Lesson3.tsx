import React, { useState } from 'react'
import API from './API'
import './lesson_3'

type SearchResultType = {
  Search: FilmType[]
  totalResults: string
  Response: string
  Error: string
}

type FilmType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const initialSearchResult: SearchResultType = {
  Search: [],
  Error: '',
  totalResults: '',
  Response: '',
}

const Lesson3 = () => {
  const [searchName, setSearchName] = useState('')
  const [searchResult, setSearchResult] = useState(initialSearchResult)
  const [searchNameByType, setSearchNameByType] = useState('')
  const [searchResultByType, setSearchResultByType] =
    useState(initialSearchResult)

  const getResultsNodes = (result: SearchResultType) => {
    return result.Response === 'True' ? (
      <div>
        <div>Total Results: {result.totalResults}</div>
        {result.Search.map((film: FilmType) => {
          return (
            <div key={film.imdbID}>
              <img src={film.Poster} alt='' />
              <div>Title: {film.Title}</div>
              <div>Year: {film.Year}</div>
              <div>Type: {film.Type}</div>
            </div>
          )
        })}
      </div>
    ) : null
  }

  let searchedFilmsByTitle = getResultsNodes(searchResult)
  let searchedFilmsByType = getResultsNodes(searchResultByType)

  const searchFilm = () => {
    API.searchFilmsByTitle(searchName).then((response) => {
      if (response.Response === 'True') {
        setSearchResult({ ...searchResult, ...response })
      } else {
        setSearchResult({ ...initialSearchResult, ...response })
      }
    })
  }

  const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = e.currentTarget.dataset.t
      ? e.currentTarget.dataset.t
      : ''
    API.searchFilmsByType(searchNameByType, type).then((response) => {
      if (response.Response === 'True') {
        setSearchResultByType({ ...searchResultByType, ...response })
      } else {
        setSearchResultByType({ ...initialSearchResult, ...response })
      }
    })
  }

  return (
    <div>
      <h1>Promises</h1>
      <div>
        <h3>
          <p>Search by name:</p>
        </h3>
        <input
          type='text'
          value={searchName}
          onChange={(e) => setSearchName(e.currentTarget.value)}
        />
        <button onClick={searchFilm}>Search</button>
        {searchedFilmsByTitle || <div>{searchResult.Error}</div>}
      </div>

      <div>
        <h3>
          <p>Search by type:</p>
        </h3>
        <input
          type='text'
          value={searchNameByType}
          onChange={(e) => setSearchNameByType(e.currentTarget.value)}
        />
        <button onClick={searchByType} data-t='movie'>
          Movie
        </button>
        <button onClick={searchByType} data-t='series'>
          Series
        </button>
        <div>
          {searchedFilmsByType || <div>{searchResultByType.Error}</div>}
        </div>
      </div>
    </div>
  )
}
export default Lesson3

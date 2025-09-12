import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
       <Row title = 'NETFLIX ORIGINALS'
       isLargeRow={true}
       fetchUrl = {requests.fetchNetflixOriginals}/>
          <Row title = 'TRENDING NOW'
       isLargeRow={true}
       fetchUrl = {requests.fetchTrending}/>
        <Row title = 'TOP RATED'
       isLargeRow={true}
       fetchUrl = {requests.fetchTopRatedMovies}/>
        
           <Row title = 'TV SHOWS'
       isLargeRow={true}
       fetchUrl = {requests.fetchTvShow}/>
        <Row title = 'ACTION MOVIES'
       isLargeRow={true}
       fetchUrl = {requests.fetchActionMovies}/>
           <Row title = 'COMEDY MOVIES'
       isLargeRow={true}
       fetchUrl = {requests.fetchComedyMovies}/>
        <Row title = 'HORROR MOVIES'
       isLargeRow={true}
       fetchUrl = {requests.fetchHorrorMovies}/>
         <Row title = 'ROMANCE MOVIES'
       isLargeRow={true}
       fetchUrl = {requests.fetchRomanceMovies}/>
         <Row title = 'DOCUMENTARY'
       isLargeRow={true}
       fetchUrl = {requests.fetchDocumentary}/>
    </>
  )
}

export default RowList
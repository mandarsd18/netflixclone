import React from 'react'
import Main from './Main'
import Row from './Row'

const Home = () => {
  return (
   <>
    <Main/>
    <Row rowNo="15"  title="Popular" fetchUrl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46d5d12e4b73fa813a99fe6348de50de"/>

    <Row rowNo="1"  title="Adventure" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=12"/>

    <Row rowNo=""  title="Family" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=10751"/>

   <Row rowNo="2"  title="Action" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=28"/>
   <Row rowNo="3"  title="Animation" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=16"/>
   <Row rowNo="4"  title="Comedy" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=35"/>
   <Row  rowNo="5" title="Crime" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=80"/>
  
   <Row  rowNo="6" title="Drama" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=18"/>
   <Row  rowNo="7" title="Fantasy" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=14"/>


   <Row rowNo="8"  title="History" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=36"/>
    <Row rowNo="9"  title="Horror" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=27"/>
     <Row rowNo="10"  title="Mystery" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=9648"/> 
     <Row rowNo="11"  title="Romance" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=10749"/>
     <Row rowNo="12"  title="Science Fiction" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=878"/>

     <Row rowNo="13"  title="Thriller" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=53"/>
     <Row rowNo="14"  title="Western" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=37"/>
     <Row rowNo="15"  title="war" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=10752"/>
     <Row rowNo="16"  title="Documentary" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=46d5d12e4b73fa813a99fe6348de50de&with_genres=99"/>
  
</>
  

  )
}

export default Home

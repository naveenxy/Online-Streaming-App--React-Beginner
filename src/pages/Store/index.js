import React from 'react'
import Header from '../Home/Header'
import MovieCards from '../../Components/MovieCards'
const Store = (props) => {
  return (
    <div>

<Header/>
    <MovieCards isLoggedIn={props.isLoggedIn}/>
    </div>
   
    
  )
}

export default Store

import React from 'react'
import data from "../../data/data.json"
import Post from '../components/Post/post'
import './Movies.css'

const Movies = () => {
  return (
    <div className='movies'>
      <h1 className="movies_title">Movies</h1>
      <ul className="movies_list">
        {data.map((item) => {
          if(item.category === "Movie") {
            return <Post type='default' data={item} key={item.id} />
          }
        })}
      </ul>
    </div>
  )
}

export default Movies

import React from 'react'
import data from "../../data/data.json"
import Post from '../components/Post/post'
import './Series.css'

const Series = () => {
  return (
    <div className='series'>
      <h1 className="series_title">TV Series</h1>
      <ul className="series_list">
        {data.map((item) => {
          if(item.category === "TV Series") {
            return <Post type='default' data={item} key={item.id} />
          }
        })}
      </ul>
    </div>
  )
}

export default Series
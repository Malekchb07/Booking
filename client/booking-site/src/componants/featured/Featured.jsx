import React from 'react'
import './featured.css'
import {useFetch} from '../../hooks/useFetch.js';

const Featured = () => {

  const {data,loading,error} = useFetch("/hotels/countByCity?cities=madrid,djerba,berlin")

  return (
    <div className='featured'>
      {loading ? ( "Loading please wait " 
      ) : (
      <><div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>madrid</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>djerba</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>london</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  )
}

export default Featured
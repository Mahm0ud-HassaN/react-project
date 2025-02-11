import React from 'react';
import img from  './image.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
    <div className='container-fluid'>
        <img src={img} alt=""
        style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            height: '100%',
        }} />
          <Link
        to="/"
        className=" btn btn-warning w-100 py-2 text-light"
      >   Go Back Home
      </Link>
    </div>
    </>
  )
}

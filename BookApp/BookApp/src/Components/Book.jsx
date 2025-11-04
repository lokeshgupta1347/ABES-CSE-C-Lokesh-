import React from 'react'
import './book.css'
import { useState } from 'react'

function Book(props) {
    const [count,setCount]=useState(0);
    function increment()
    {
        setCount(count+1)
    }
    function decrement()
    {
        setCount(count-1)
    }
  return (
    <div id='book'><img src={props.img} alt="" width={200} height={150} />
    <h1>Title:{props.Title}</h1>
    <h1>Price{props.Price}</h1>
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>
    </div>
    
  )
}

export default Book
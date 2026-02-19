import React from 'react'
import Book from './Components/Book'
import './App.css'
import Navbar from './Components/Navbar'
import './Components/Navbar.css'

function App() {
  return (
    <>
    <Navbar/>
    <div id='adi'>
      <Book Title="Physics" Price="800" img='https://tse3.mm.bing.net/th/id/OIP.9W4LPPGXFZVf22bfnNOsxQHaHa?pid=Api&P=0&h=180'/>
      <Book Title="Math" Price="500" img='https://tse3.mm.bing.net/th/id/OIP.Ln1EkcunmGtGeoTh5qAZvQHaKF?pid=Api&P=0&h=180'
      />
      <Book Title="Chemistry" Price="600" img='https://tse3.mm.bing.net/th/id/OIP.7O6COv4GgEuy5cNpq-G_FwHaIZ?pid=Api&P=0&h=180'/>
    </div>
    </>
  )
}

export default App

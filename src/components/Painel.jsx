import React from 'react'
import foto from '../assets/minhafoto.jpg'
import { Link } from 'react-router-dom'

function Painel() {
  return (
    <>
      <footer>
        <div className='div-painel'>
          <div className='div-content'>
            <Link class="btn btn-dark" to='/about'>Sobre</Link>
            <button class="btn btn-dark">Projetos</button>
            <button class="btn btn-dark">Sei la</button>
          </div>
          <img src={foto} alt="" />
        </div>
      </footer >
    </>
  )
}

export default Painel
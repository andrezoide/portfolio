import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../assets/minhafoto.jpg'

function Painel() {
  return <footer>
    <div className='div-painel'>
      <div className='div-content'>
        <Link to='/' class="btn btn-dark" >Home</Link>
        <CustomLink to='/about' class="btn btn-dark">Sobre</CustomLink>
        <CustomLink to='/projects' class="btn btn-dark">Projetos</CustomLink>
      </div>
      <img src={foto} alt="" />
    </div>
  </footer >
}


function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Painel
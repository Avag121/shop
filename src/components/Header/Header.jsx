import './header.js'
import'./header.css'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <>
        <nav className='nav'>
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/about' className='link'>About</NavLink>
            <NavLink to='/products' className='link'>Products</NavLink>
        </nav>
        </>
    )
}
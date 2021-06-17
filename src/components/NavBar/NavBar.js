import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav >
            <div className="nav-wrapper">
            <a className="brand-logo">FoodStore</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/categoria/1" >Hamburguesas</NavLink></li>
                <li><NavLink to="/categoria/2" >Pizzas</NavLink></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Ingresar</a></li>
                
                <li><a><CartWidget/></a></li>
            </ul>
            </div>
        </nav>
    );
  }
  
export default NavBar;
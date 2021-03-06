import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav >
            <div className="nav-wrapper">
                <NavLink className="brand-logo" to="/" >FoodStore</NavLink> 
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink activeClassName="selected" to="/category/1" >Hamburguesas</NavLink></li>
                <li><NavLink activeClassName="selected" to="/category/2" >Pizzas</NavLink></li>
                <li><NavLink to="/" >Productos</NavLink></li>
                <li><CartWidget/></li>
            </ul>
            </div>
        </nav>
    );
  }
  
export default NavBar;
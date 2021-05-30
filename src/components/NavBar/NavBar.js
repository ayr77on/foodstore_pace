import './NavBar.css';

function NavBar () {
    return (
        <nav >
            <div className="nav-wrapper">
            <a className="brand-logo">FoodStore</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="">Productos</a></li>
                <li><a href="">Ingresar</a></li>
                <li><a><i className="material-icons">shopping_cart</i></a></li>
            </ul>
            </div>
        </nav>
    );
  }
  
export default NavBar;
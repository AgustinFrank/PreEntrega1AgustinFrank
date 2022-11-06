import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
      <h1>OnlyFoot</h1>
      </Link>
      <div>
      <Link to='/'> <button>productos</button>   </Link>
        <button>contacto</button>
      </div>
    </nav>
  );
}
export default Navbar
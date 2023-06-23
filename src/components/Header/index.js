// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-menu">
    <li className="h">
      <Link to="/">Home</Link>
    </li>
    <li className="h">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header

import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <img src="/ritmo-logo.png" alt="logo for Ritmo app" />
      <ul>
        <li>
          <Link to="/cuban-salsa">Cuban Salsa</Link>
          <ul className="dropdown">
            <li>
              <Link to="/cuban-salsa/beginners">Beginners</Link>
            </li>
            <li>
              <Link to="/cuban-salsa/intermediate">Intermediate</Link>
            </li>
            <li>
              <Link to="/cuban-salsa/advanced">Advanced</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Header

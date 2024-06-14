import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul className={styles.HeaderEstilo}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.ativado : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/clientes" className={({ isActive }) => isActive ? styles.ativado : ''}>
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header;


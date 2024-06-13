import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <ul className={styles.HeaderEstilo}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
      </ul>
    </div>
  )
}

export default Header
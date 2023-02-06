import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
      <nav className={styles.navbar}>
          <ul>
              <Link to="/" className={styles.title}>QR Code Generator</Link>
              <Link to="/about">What</Link>
              <Link to="/howtouse">How</Link>
          </ul>
      </nav>

  );
};

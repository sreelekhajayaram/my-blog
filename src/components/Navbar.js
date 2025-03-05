import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/add-blog" style={styles.link}>Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;

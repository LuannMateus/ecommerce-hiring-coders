import { useEffect } from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useHistory } from 'react-router';

import styles from './styles.module.scss';

type User = {
  name: string;
  email: string;
};

const Navbar = () => {
  const [user, setUser] = useState<User>();

  const history = useHistory();

  useEffect(() => {
    const userData = localStorage.getItem('user') ?? '';

    const parseUser = JSON.parse(userData) as User;

    if (parseUser.name !== '') {
      setUser(parseUser);
    } else {
      setUser({
        name: '',
        email: '',
      });
    }
  }, []);

  const handleLogin = () => {
    if (user) {
      localStorage.setItem('user', JSON.stringify({ name: '', email: '' }));
      history.push('/login');
    } else {
      history.push('/login');
    }
  };

  return (
    <nav className={styles.navbar}>
      <h1>Best Book</h1>
      <menu className={styles.navbarMenu}>
        <FaUserCircle className={styles.navbarLoginIcon} />
        <div className={styles.menuLoginBlock}>
          <strong>
            <p className={styles.menuTitle}>
              Bem vindo {user?.name !== '' ? user?.name : ''} :)
            </p>
          </strong>

          <button className={styles.menuSubtitle} onClick={handleLogin}>
            {user?.name === '' && 'Entre ou cadastre-se'}
            {user?.name !== '' && 'Sair'}
          </button>
        </div>
      </menu>
    </nav>
  );
};

export { Navbar };

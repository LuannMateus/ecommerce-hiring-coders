import { useEffect, useState } from 'react';

import { IoMdSettings } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { useCart } from '../../hooks/useCart';

type User = {
  name: string;
  email: string;
};

const Navbar = () => {
  const { items } = useCart();
  const [user, setUser] = useState<User>();

  const history = useHistory();

  useEffect(() => {
    const userExists = !!localStorage.getItem('user');

    if (userExists) {
      const userData = localStorage.getItem('user') ?? '';

      const parseUser = JSON.parse(userData) as User;
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
    <nav id="navbar" className={styles.navbar}>
      <Link to="/">
        <h1>Best Book</h1>
      </Link>
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

        <section className={styles.menuActionsButtons}>
          <div className={styles.menuAdminBlock}>
            <Link to="/admin" className={styles.menuAdminBlock}>
              <IoMdSettings className={styles.adminIcon} />
              <strong>
                <p className={styles.menuTitle}>Administração</p>
              </strong>
            </Link>
          </div>

          <div className={styles.menuCartBlock}>
            <Link to="/cart" className={styles.menuCartBlock}>
              <GiShoppingCart className={styles.cartIcon} />
              <span>{items?.length}</span>
              <strong>
                <p className={styles.menuTitle}>Carrinho</p>
              </strong>
            </Link>
          </div>
        </section>
      </menu>
    </nav>
  );
};

export { Navbar };

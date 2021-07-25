import { FormEvent } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';

import { Button } from '../../components/Button';
import styles from './styles.module.scss';

const Authentication = () => {
  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as String,
      email: formData.get('email') as String,
      imageUrl: '',
    };

    const isValidate = data.name.length > 2 && data.email.includes('@');

    if (!isValidate) {
      return;
    }

    try {
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Best Books</title>
      </Helmet>
      <div className={styles.pageAuth}>
        <aside>
          <strong>Registre-se e obtenha as melhores promoções</strong>
          <p>Reconhecida e confiada mundialmente</p>
        </aside>

        <main>
          <h1>Fazer Login</h1>

          <div className={styles.mainContent}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Digite o seu e-mail"
                required
              />
              <Button type="submit">Registrar</Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Authentication;

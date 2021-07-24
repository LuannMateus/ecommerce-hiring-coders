import { TextField, Button } from '@material-ui/core';
import { FormEvent } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Product } from '../../model/Product';
import { User } from '../../model/User';
import { saveUserInLocalStorage } from '../../service/registerService';

import { ToastContainer, toast } from 'react-toastify';
import { IoMdSettings } from 'react-icons/io';
import { FaUsers, FaBook } from 'react-icons/fa';

import { Helmet } from 'react-helmet';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Admin = () => {
  const handleUserSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
    } as User;

    try {
      saveUserInLocalStorage('users', data);
      toast.success('Usuário registrado com sucesso :)');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleProductSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      category: formData.get('category'),
      price: formData.get('price'),
      barCode: formData.get('barCode'),
    } as Product;

    try {
      saveUserInLocalStorage('products', data);
      toast.success('Product registrado com sucesso :)');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Admin | Best Book </title>
      </Helmet>
      <Navbar />
      <header className={styles.adminHeader}>
        <h1>Administração</h1>
        <IoMdSettings className={styles.icon} />
      </header>
      <main className={styles.adminMain}>
        <section className={styles.mainUser}>
          <div className={styles.titleAndIcon}>
            <h2>Cadastro de usuários</h2>

            <FaUsers className={styles.icon} />
          </div>
          <form className={styles.mainForm} onSubmit={handleUserSubmit}>
            <div className={styles.inputBlock}>
              <TextField
                placeholder="Nome"
                color="primary"
                variant="outlined"
                name="name"
              />
              <TextField
                placeholder="Sobrenome"
                color="primary"
                variant="outlined"
                name="lastName"
              />
              <TextField
                placeholder="Telefone"
                color="primary"
                variant="outlined"
                name="phone"
              />
              <TextField
                placeholder="E-mail"
                color="primary"
                variant="outlined"
                name="email"
              />
            </div>
            <div className={styles.btnBlock}>
              <Button variant="contained" color="secondary" type="submit">
                Registrar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={styles.btnCancel}
                type="reset"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </section>

        <section className={styles.mainProduct}>
          <div className={styles.titleAndIcon}>
            <h2>Cadastro de produtos</h2>
            <FaBook className={styles.icon} />
          </div>

          <form onSubmit={handleProductSubmit} className={styles.mainForm}>
            <div className={styles.inputBlock}>
              <TextField
                placeholder="Nome"
                color="primary"
                variant="outlined"
                name="name"
              />
              <TextField
                placeholder="Categoria"
                color="primary"
                variant="outlined"
                name="category"
              />
              <TextField
                placeholder="Preço"
                color="primary"
                variant="outlined"
                name="price"
              />
              <TextField
                placeholder="Código de barra"
                color="primary"
                variant="outlined"
                name="barCode"
              />
            </div>

            <div className={styles.btnBlock}>
              <Button variant="contained" color="secondary" type="submit">
                Registrar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={styles.btnCancel}
                type="reset"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admin;

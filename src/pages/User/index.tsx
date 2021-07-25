import { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

import { ExtractItem } from '../../components/ExtractItem';
import { Extract } from '../../model/Extract';
import { TextField } from '@material-ui/core';

import styles from './styles.module.scss';
import { LoginUser } from '../../model/LoginUser';
import { EmptyProductBox } from '../../components/EmptyProductBox';

const UserPage = () => {
  const [user, setUser] = useState<LoginUser>();
  const [imageUser, setImageUser] = useState('');
  const [extracts, setExtracts] = useState<Extract[]>();

  useEffect(() => {
    getUser();
    getExtract();
  }, []);

  const getUser = () => {
    const user = localStorage.getItem('user') ?? '';

    const parseUser = JSON.parse(user) as LoginUser;

    setUser(parseUser);
  };

  const getExtract = () => {
    const localUser = localStorage.getItem('user') ?? '';

    const parseUser = JSON.parse(localUser) as LoginUser;

    const existsExtracts = localStorage.getItem(parseUser.name) ?? '';

    if (existsExtracts.length > 0) {
      const parseExtracts = JSON.parse(existsExtracts) as Extract[];
      setExtracts(parseExtracts);
    }

    return;
  };

  const renderExtract = () => {
    return extracts?.map((extract) => {
      return (
        <div
          className={styles.extractBlock}
          key={`user_extract_items_${Math.random()}`}
        >
          <h3>{extract.dateOfPurchase}</h3>
          <ExtractItem
            extract={extract}
            key={`user_extract_${Math.random()}`}
          />
        </div>
      );
    });
  };

  const handleChangePhoto = () => {
    const newData = {
      name: user?.name ?? '',
      email: user?.email ?? '',
      imageUrl: imageUser ?? '',
    };
    setUser(newData);
    localStorage.setItem('user', JSON.stringify(newData));
  };

  return (
    <>
      <Helmet>
        <title>User | Best Book</title>
      </Helmet>
      <Navbar />
      <header className={styles.userHeader}>
        <img
          src={
            user?.imageUrl !== ''
              ? user?.imageUrl
              : 'https://www.pngkey.com/png/full/337-3371421_picture-transparent-tumblr-stickers.png'
          }
          alt=""
        />

        <p className={styles.userName}>@{user?.name}</p>
        <p className={styles.email}> {user?.email}</p>

        <div className={styles.photoChangeBox}>
          <TextField
            variant="outlined"
            placeholder="Trocar de foto"
            className={styles.userImage}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setImageUser(event.target.value)
            }
          />
          <button onClick={handleChangePhoto}>Trocar</button>
        </div>
      </header>
      <main className={styles.userMain}>
        <h1>Extratos</h1>

        {renderExtract()}

        {extracts === undefined && (
          <EmptyProductBox
            title="Sem extratos para mostrar"
            subtitle="Compras feitas na Best Book"
            icon="AiTwotoneBank"
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default UserPage;

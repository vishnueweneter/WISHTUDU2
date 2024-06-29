import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.dark);
      document.body.classList.remove(styles.light);
    } else {
      document.body.classList.remove(styles.dark);
      document.body.classList.add(styles.light);
    }
  }, [darkMode]);

  return (
    <>
      {!darkMode && <div className={styles.lightBackground}></div>}
      <div className="container">
        <div className={styles.header}>
          <PageTitle>WISHTUDU</PageTitle>
          <button onClick={toggleDarkMode} className={`${styles.toggleButton} ${styles.gradientButton}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;

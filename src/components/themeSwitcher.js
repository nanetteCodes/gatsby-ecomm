import React, { useState, useEffect } from 'react';
import './themeSwitcher.scss';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'two') {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      // local storage to make sure theme does not switch on refresh
      localStorage.setItem('Theme', 'two');
      document.body.classList.add('theme-two');
    } else {
      localStorage.setItem('Theme', 'one');
      document.body.classList.remove('theme-two');
    }
  }, [theme]);

  return (
    <div className='theme-btn-container' data-testid='theme-container'>

      <button
        className="btn logo-box"
        data-testid='theme-switcher'
        onClick={() => setTheme(!theme)}
      >
        {theme ? 'Theme Two' : 'Theme One'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

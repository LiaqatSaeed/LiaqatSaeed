import cx from 'classNames';
import { useState } from 'react';
import { useScrollDirection } from '../hooks';

export const Menu = () => {
  const { direction } = useScrollDirection();
  const [mode, setMode] = useState(false);

  const handleChange = (mode: boolean) => {
    const newState = !mode;
    setMode(newState);
    if (newState) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <nav
      className={cx('navbar navbar-expand-sm navbar-light', direction, {"dark-mode": mode})}
    >
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          <img
            src='./Liaqat_saeed.jpeg'
            className='img-fluid profile-img'
            alt='Liaqat Saeed'
          />
          Liaqat Saeed
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a href='#about' className='nav-link'>
                <span data-hover='About'>About</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#project' className='nav-link'>
                <span data-hover='Projects'>Projects</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' className='nav-link'>
                <span data-hover='Resume'>Resume</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                <span data-hover='Contact'>Contact</span>
              </a>
            </li>
          </ul>

          <ul className='navbar-nav ml-lg-auto'>
            <div className='ml-lg-4'>
              <div
                className={cx(
                  `
                  color-mode
                  d-lg-flex
                  justify-content-center
                  align-items-center
                `,
                  { active: mode }
                )}
                onClick={() => handleChange(mode)}
              >
                <i className='color-mode-icon'></i>
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

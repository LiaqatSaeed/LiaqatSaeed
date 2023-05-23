import { useContext } from 'react';
import { AppContext } from '../context';
import { Icon } from './icon';

export const Footer = () => {
  const { footer } = useContext(AppContext);
  console.log('----footer', footer);
  return (
    <footer className='footer py-5 contact-info text-center' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-12'>
            <div className='contact-info-item'>
              <h3 className='mb-3 text-white'>Say hello</h3>
              <p className='footer-text mb-0'>{footer.phone}</p>
              <p>
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
            </div>
            <div className='col-lg-12 col-12'>
              <ul
                className='
                  align-items-center
                  justify-content-center
                  social-links
                  d-flex
                '
              >
                {footer.socials.map(({ title, icon, url }) => (
                  <li>
                    <a
                      href={url}
                      data-toggle='tooltip'
                      data-placement='left'
                      className='mr-2 ml-2'
                      title={title}
                    >
                      <Icon name={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

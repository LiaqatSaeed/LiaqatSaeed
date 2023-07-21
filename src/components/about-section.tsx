import { useContext } from 'react';
import { AppContext } from '../context';

export const AboutSection = () => {
  const { name, title, summary, about, about_quote } = useContext(AppContext);
  return (
    //   <!-- ABOUT -->
    <section
      className='
        about
        full-screen
        d-lg-flex
        justify-content-center
        align-items-center
      '
      id='about'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-12 col-12 d-flex align-items-center'>
            <div className='about-text'>
              <small className='small-text'>
                Welcome to
                <span className='mobile-block'>my portfolio website!</span>
              </small>
              <h1 className='animated animated-text'>
                <span className='mr-2'>Hey folks, I'm</span>
                <div className='animated-info'>
                  <h1 className='animated-item'>{name}</h1>
                  <h1 className='animated-item'>{title}</h1>
                </div>
              </h1>

              <p>{summary}</p>

              <div className=''>
                <h2>
                  <span>
                    <strong>Objective</strong>
                  </span>
                </h2>
                <p>{about}</p>
                <p>{about_quote}</p>
              </div>

              <div className='custom-btn-group mt-4'>
                <a
                  href='./resume/Liaqat_Saeed_Resume_Latest.pdf'
                  className='btn mr-lg-2 custom-btn'
                  target="_blank"
                >
                  <i className='uil uil-file-alt'></i> View Resume
                </a>
                <a
                  href='#contact'
                  className='btn custom-btn custom-btn-bg custom-btn-link'
                >
                  Get a free quote
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-12 col-12'>
            <div className='about-image svg'>
              <img
                src='./undraw/undraw_software_engineer_lvl5.svg'
                className='img-fluid'
                alt='svg image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

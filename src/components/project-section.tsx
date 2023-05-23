import OwlCarousel from 'react-owl-carousel';
import { useContext } from 'react';
import { AppContext } from '../context';

export const ProjectSection = () => {
  const { projects } = useContext(AppContext);
  return (
    <section className='project py-5' id='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-11 text-center mx-auto col-12'>
            <div className='col-lg-8 mx-auto'>
              <h2>Demos of Past Projects</h2>
            </div>

            <OwlCarousel
              className='owl-carousel owl-theme'
              items={1}
              loop
              autoplayTimeout={10000}
              margin={10}
              nav={true}
              autoplay={true}
              autoplayHoverPause={true}
            >
              {projects.map(({ title, demo_url }) => (
                <div className='item'>
                  <div className='project-info'>
                    <h5 className='work-name'>
                     {title}
                    </h5>
                    <iframe
                      src={demo_url}
                      frameBorder='0'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useContext } from 'react';
import { AppContext } from '../context';

export const FeatureSection = () => {
  const { timeline } = useContext(AppContext);
  return (
    <section
      className='resume py-5 d-lg-flex justify-content-center align-items-center'
      id='resume'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <h2 className='mb-4'>Experiences</h2>

            <div className='timeline'>
              {timeline.experience.map(
                ({
                  period,
                  job_title,
                  location,
                  company_name,
                  description,
                }) => (
                  <div className='timeline-wrapper'>
                    <div className='timeline-yr'>
                      <span>{period}</span>
                    </div>
                    <div className='timeline-info'>
                      <h3>
                        <span>{job_title}</span>
                        <small>
                          {company_name}, {location}
                        </small>
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className='col-lg-6 col-12'>
            <h2 className='mb-4 mobile-mt-2'>Some Favorite Projects</h2>

            <div className='timeline'>
              {timeline.projects.map(
                ({ period, title, url, company_name, description, skills }) => (
                  <div className='timeline-wrapper'>
                    <div className='timeline-yr'>
                      <span>{period}</span>
                    </div>
                    <div className='timeline-info'>
                      <h3>
                        <span>
                          <strong>
                            <a rel='nofollow' href={url}>
                              {title}
                            </a>
                          </strong>
                        </span>
                        <small>{company_name}</small>
                      </h3>
                      <p>
                        {description}.
                        <br />
                        <strong>Skills:</strong> {skills}.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

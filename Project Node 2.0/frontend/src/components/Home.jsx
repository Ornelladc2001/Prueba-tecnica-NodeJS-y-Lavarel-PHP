import React from 'react';

const Home = () => {
  return (
    <>
   

      <section className="main-section">
        
        <figure className="image-block">
          <img src="/Imagen2.webp" alt="Placeholder" />
           <figcaption className="image-caption">
            
            <p className='tours'>Tours & Travels</p>
            <p className='amazing'>Amazing Places on Earth</p>
            <p className='december'>December 12, 2018</p>
            
            </figcaption>
           
        </figure>

        <section className="small-images-section">
          <article className="small-image">
            <img src="/Imagen2.webp" alt="Placeholder" />

            <section className="fashion-container">
              <button className="fashion-button">FASHION</button>
            </section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            <p className='days'>2 days ago </p>
          </article>

          <article className="small-image">
            <img src="/Imagen2.webp" alt="Placeholder" />

            <section className="fashion-container">
              <button className="fashion-button">FASHION</button>
            </section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            <p className='days'>2 days ago </p>
          </article>

          <article className="small-image">
            <img src="/Imagen2.webp" alt="Placeholder" />

            <section className="fashion-container">
              <button className="fashion-button">FASHION</button>
            </section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            <p className='days'>2 days ago </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default Home;

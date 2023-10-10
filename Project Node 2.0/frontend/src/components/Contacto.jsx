import  { useState } from 'react';
import { Headphones } from 'react-feather';
import { Home } from 'react-feather';
import { Mail } from 'react-feather';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_FRONTEND}/contacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);

      
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Mostrar mensaje de éxito
        setSuccessMessage(responseData.message);
        setErrorMessage(''); 
      } else {
        console.error('Error al enviar el formulario:', response.status, response.statusText);
        const errorData = await response.json();
        console.error('Detalles del error:', errorData);

      
        setErrorMessage(errorData.error);
        setSuccessMessage(''); 
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

     
      setErrorMessage('Error interno del servidor');
      setSuccessMessage(''); 
    }
  };

  return (
  
  
  
  
  <section className="contact-container">


      <aside className="contact-info" >
       <p className='titulo1'><Home /> California United States</p>
        <p className='subtitulo1' >Santa Monica Boulevard</p>
       <p className='titulo2'> <Headphones />00 (440) 9865 562</p>
        <p className='subtitulo2'>Mon to Fri 9am to 6pm</p>
        <p className='titulo3'> <Mail/>support@colorlib.com</p>
        <p className='subtitulo3'>Send us your query anytime!</p>
      </aside>


      <article className="contact-form">

      

        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />

          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" />

          <label htmlFor="subject"></label>
          <input type="subject" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter Subject" />

         
        
         </form>

         <form onSubmit={handleSubmit}>

           <section className='message-section'>
          <label htmlFor="message"></label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Message"></textarea>

          
          </section>
        

         <section className='button-section'>
           <button type="submit" className='submit'>Enviar</button>
          </section>
         </form>

        
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
         
      </article>

  
    </section>
  );
};

export default Contacto;

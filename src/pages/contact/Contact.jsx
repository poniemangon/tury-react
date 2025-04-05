import React, { useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import Button from '../../components/button/Button';
import Banner from '../../components/banner/Banner';
import './styles.css';
import contactBg from '/images/contact-us-bg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviado:', formData);
  };

  return (
    <main className='contact-page'>
        <Banner
        headline="Escribinos tus consultas"
        title="Contacto"
        backgroundImage="/images/banner-contact.png"
        />
    
    <section id="contact" className="contact-us-section">
      <div className="row d-flex">
        <div   style={{
    backgroundImage: `url(${contactBg})`,
  }} className="col car-col"></div>

        <div className="form-col">
          <img className="vector-form" src="./images/vector-form.png" alt="" />
          <div className="container">
            <h2 className="animate-on-scroll fade-down">
              ¿Te gustaría tener más
              <div className="key-image">
                <img src="./images/key-white.png" alt="" />
              </div>
              información?
            </h2>

            <form onSubmit={handleSubmit}>
              <FormInput
                placeholder="NOMBRE"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormInput
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                placeholder="TELÉFONO"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <FormInput
                placeholder="CIUDAD"
                name="city"
                type="select"
                value={formData.city}
                onChange={handleChange}
                options={['BUENOS AIRES', 'ROSARIO', 'CORDOBA', 'LA PLATA']}
              />
              <FormInput
                placeholder="CONSULTA..."
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                text="QUIERO MÁS INFO"
                type="submit"
                variant="red"
              />

            </form>

            <p className="subhead">Te contactaremos en menos de 24 hs hábiles.</p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Contact;

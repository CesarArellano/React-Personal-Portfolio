import { SyntheticEvent } from 'react'
import { useForm } from '../hooks/useForm';

export const ContactSection = () => {
  
  const { formValues, handleOnChange, reset } = useForm({
    fullName: '',
    email: '',
    msg: ''
  });

  
  const { fullName, email, msg } = formValues;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    window.location.href = `mailTo:cesarmauricio.arellano@gmail.com?subject=Hello, I'm ${ fullName }, I want to contact you&body=Email: ${ email }, Message: ${ msg }`;
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="heading white">
          <h2>Contact Me</h2>
          <p>In this section, you can contact me. I will be happy to chat with you </p>
        </div>
        <div className="content">
          <div className="contactInfo">
            <h3>Contact Info</h3>
            <div className="contactInfoBx">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Tecámac, Estado de México</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>55-67-87-94-98</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>cesarmauricio.arellano@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/cesararellanov/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="social-icon">
                  <a href="https://github.com/CesarArellano" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>              
                </div>
                <div className="social-icon">
                  <a href="https://twitter.com/UnDiaConRay" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>              
                </div>
              </div>
            </div>
          </div>
          <div className="formBx">
            <form onSubmit={ handleSubmit } >
              <h3>Message me</h3>
              <input  
                type="text"
                placeholder="Full Name"
                value={ fullName }
                onChange={ ({ target }) => handleOnChange('fullName', target.value ) }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={ email }
                onChange={ ({ target }) => handleOnChange('email', target.value ) }
                required
              />
              <textarea 
                placeholder="Your Message"
                value={ msg }
                onChange={ ({ target }) => handleOnChange('msg', target.value ) }
                required
              >  
              </textarea>
              <div className="buttons">
                <button
                  type="submit"
                  className='btn-blue'
                >
                  Send
                </button>
                <button
                  type="reset"
                  className='btn-pink'
                  onClick={ reset } 
                >
                  Reset 
                </button>
              </div> 
            </form>
          </div>
        </div>
        <a href="/" id="mailTo">Hola</a>
      </section>
    </>
  )
}

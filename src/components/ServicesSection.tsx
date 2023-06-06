import service1 from '../assets/images/icon1.png';
import service2 from '../assets/images/icon2.png';
import service3 from '../assets/images/icon3.png';
import service4 from '../assets/images/icon4.png';

export const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="heading white">
        <h2>My services</h2>
      </div>
      <div className="content">
        <div className="servicesBx">
          <img src={ service1 } alt="Icono 1" />
          <h2>Web Design</h2>
          <p>I have used diferent CSS Frameworks such as Bootstrap and Materialize to design many websites, but also I know how to use native CSS to layout any website based on the requirements.</p>
        </div>
        <div className="servicesBx2">
          <img src={ service2 } alt="Icono 2" />
          <h2>Web Development</h2>
          <p>I have experience in many technologies, for example JS, Angular, JQuery, PHP and MySQL. In this area, I have done many projects such as Clone Instagram, Basic Ecommerce and Evaluation Platform.</p> 
        </div>
        <div className="servicesBx3">
          <img src={ service3 } alt="Icono 3" />
          <h2>Mobile Apps</h2>
          <p>I'm currently developing mobile apps with Flutter, in this Framework I have done interesting apps like QR Reader, Cinema Listings and News Reader, using Firebase, Google Maps's API and TheMovieDB.</p> 
        </div>
        <div className="servicesBx4">
          <img src={ service4 } alt="Icono 4" />
          <h2>Video Editing</h2>
          <p>I have done a lot of personal and academic video projects with Sony Vegas Pro, adding visual and audio effects professionally. At the same time I use Adobe Photoshop and Adobe Audition to improve the video quality</p> 
        </div>
      </div>
    </section>
  )
}

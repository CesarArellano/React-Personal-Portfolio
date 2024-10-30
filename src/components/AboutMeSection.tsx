import img1 from "../assets/images/img1.jpg";
import cv from "../assets/documents/cv.pdf";

export const AboutMeSection = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
        </div>
        <div className="content">
          <div className="contentBx w50">
            <h3>I'm a Software Engineer, focused on Mobile and Web.</h3>
            <p>
              I studied Computer Science and Telecommunications Engineering at
              the Universidad Iberoamericana CDMX.
              <br />
              <br />
              I have 4 years of experience in Software Development
              with Flutter, React, React Native, Typescript, both in personal
              and professional projects.
              <br />
              <br />
              I've worked in Nearfleet where I played the role as a mobile app
              developer with Flutter, to develop the best Intelligent Hyperlocal
              Delivery product in the market
              <br />
              <br />
              I'm always willing to colaborate in prestigious organizations,
              where I know I can contribute a lot with my ideas and technical
              knowledge.
              <br />
              <br />
              In my free time, I love to create digital content to teach Mobile
              Development in my Youtube Channel called <a className="black-text" href="https://youtube.com/@cesarmauricio.arellano">César Arellano</a>
            </p>
            <a className="btn-cv hoverable" href={cv} target="_blank">
              Download my CV
            </a>
          </div>
          <div className="w50">
            <img src={img1} alt="Cartoon" className="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

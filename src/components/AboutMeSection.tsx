
export const AboutMeSection = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
        </div>
        <div className="content">
        <div className="contentBx w50">
            <h3>I'm a Front-End Web and Mobile Developer</h3>
            <p>
              I'm studying at Universidad Iberoamericana CDMX in the sixth semester of Computer Science and Telecomunications Engineering.
            <br />
            <br />
              I have two years of experience in Software Development with HTML, CSS, Javascript, PHP and JQuery, both in personal and university projects. But I'm currently focused in Flutter and ReactJS. 
            <br />
            <br />
              I worked in Telematics Business Consultants where I played the role as a mobile app developer with Flutter, to develop a car insurance app.
            <br />
            <br />
              I'm willing to colaborate in a prestige company, where I know I can contribute a lot with my ideas and technical knowledge.
            <br />
            <br />
              In my free time, I like to learn new things by myself in diverse platforms. Besides I like to play the piano and the synthesizer and I really enjoy taking photos of nature.
            </p>
            <a className="btn-cv hoverable" href="./assets/documents/cv.pdf" target="_blank">Download my CV</a>
            
          </div>
          <div className="w50">
            <img src="./assets/images/img1.jpg" alt="Cartoon" className="img" />
          </div>
        </div>
      </section>
    </div>
  )
}

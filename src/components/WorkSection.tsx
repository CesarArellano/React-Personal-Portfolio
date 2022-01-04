
export const WorkSection = () => {
  return (
    <section className="work" id="work">
    <div className="heading">
      <h2>Work</h2>
      <p>I'm a productive and friendly person, I love meeting new people with different perspectives, this has helped me to be a better human being.</p>
      <p>Below I show some of the most relevant projects that I have achieved thanks to the efforts of the people I have met and have provided their feedback.</p>
    </div>
    <div className="content">
      <div className="workBx">
        <img src="./assets/images/product1.jpg" alt="product 1" className="hoverable" />
      </div>
      <div className="workBx">
        <img src="./assets/images/product2.jpg" alt="product 2" className="hoverable" />
      </div>
      <div className="workBx">
        <img src="./assets/images/product3.jpg" alt="product 3" className="hoverable" />
      </div>
      <div className="workBx">
        <img src="./assets/images/product4.jpg" alt="product 4" className="hoverable" />
      </div>
      <div className="heading-btn">
        <a href="https://github.com/CesarArellano?tab=repositories" target="_blank" className="btn-view hoverable" rel="noreferrer">View More</a>
      </div>
    </div>
  </section>
  )
}

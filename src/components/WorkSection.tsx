import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';

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
          <img src={ product1 } alt="product 1" className="hoverable" />
          <h2>Focus Code</h2>
        </div>
        <div className="workBx">
          <img src={ product2 } alt="product 2" className="hoverable" />
          <h2>Focus Music Player</h2>
        </div>
        <div className="workBx">
          <img src={ product3 } alt="product 3" className="hoverable" />
          <h2>TokTik</h2>
        </div>
        <div className="workBx">
          <img src={ product4 } alt="product 4" className="hoverable" />
          <h2>Cinema App</h2>
        </div>
        <div className="heading-btn">
          <a href="https://github.com/CesarArellano?tab=repositories" target="_blank" className="btn-view hoverable" rel="noreferrer">View More</a>
        </div>
      </div>
    </section>
  )
}

import Carousel from 'react-bootstrap/Carousel';
import "./content.css"

function Slider() {
  return (
    <Carousel className='food_slide'>
      <Carousel.Item>
        <img className='food_slide' src={ require('./img/Slide_1.jpg')} alt='Slider' />
        <Carousel.Caption>
          <h3>Our Restaurant</h3>
          <p>One of the best restaurants in the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='food_slide' src={ require('./img/Slide_2.jpg')} alt='Slider' />
        <Carousel.Caption>
          <h3>The Best Chefs</h3>
          <p>Only the best chefs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='food_slide' src={ require('./img/Slide_3.jpg')} alt='Slider' />
        <Carousel.Caption>
          <h3>The freshest products</h3>
          <p>Our restaurant uses only fresh products </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
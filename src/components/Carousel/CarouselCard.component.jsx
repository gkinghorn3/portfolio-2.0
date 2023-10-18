import './Carousel.styles.scss';

const Card = ({title, content}) => (
    <div className='card'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );

  export default Card;
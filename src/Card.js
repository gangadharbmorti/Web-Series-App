import './Card.css';
function Card(props) {
  console.log(props);
  return (
    <>
      <div className='responsive'>
        <div className='cards'>
          <div className='card'>
            <img src={props.simg} alt='Web_Poster' className='card__img' />
            <div className='card__info'>
              <span className='card__category'>{props.sname}</span>
              <h3 className='card__title'>{props.stitle}</h3>
              <a href={props.slink} target='_blank'>
                <button className='button'>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

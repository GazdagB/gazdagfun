import PropTypes from 'prop-types';

const Card = ({ img }) => {
  return (
    <>
      <div className="card p-0 rounded-4" style={{height: "250px"}}>
        <img src={img} alt="..." style={{height: "250px",width: "500px"}}  className="card-img-top card-img-bottom rounded-4" />
        
      </div>
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired, // Change 'string' to the appropriate data type if needed
};

export default Card;
const Flat = ({ image, name, price }) => {
    return (
      <div>
        <img src={image} alt=""/>
        <h2>{name}</h2>
        <h3>Prix : {price} euros</h3>
      </div>
    );
};
export default Flat;
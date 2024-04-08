const Dish = ({ img, name, price }) => {
    return (
      <div>
        <img src={img} alt=""/>
        <h2>{name}</h2>
        <span>Prix : {price} euros</span>
      </div>
    );
};
export default Dish;
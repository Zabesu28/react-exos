const Plat = ({ image, nom, prix }) => {
    return (
    <div>
        <img src={image} alt=""/>
        <h3>{nom}</h3>
        <h3>Prix : {prix} euros</h3>
    </div>
    );
    };
    export default Plat;
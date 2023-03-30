import FavIcon from '../assets/svg/fav-icon.svg';
import FavIconActive from '../assets/svg/fav-icon-active.svg';

function ItemList(props) {
  return (
    <div className="item-list">
      <div className="image">
        <img
          className="primary-image"
          src={props.image[0]}
          alt="Imagem do produto"
        />
        <img
          className="secondary-image"
          src={props.image[1]}
          alt="Imagem do produto"
        />
      </div>

      <h3 className="title">{props.title}</h3>

      <div className="price">
        <h5 className="price-dashed">{props.price[0]}</h5>
        <h4 className="price-active">{props.price[1]}</h4>
      </div>

      <p className="installments">
        em até <span>{props.installments}</span> sem juros
      </p>

      <div className="buy-button">
        <input type="checkbox" id={`buy-button-${props.id}`} />
        <label htmlFor={`buy-button-${props.id}`}>ADICIONAR</label>
      </div>

      <div className="fav-button">
        <input type="checkbox" id={`fav-button-${props.id}`} />
        <label htmlFor={`fav-button-${props.id}`}>
          <img className="fav-icon" src={FavIcon} alt="Favoritar produto" />
          <img
            className="fav-icon-active"
            src={FavIconActive}
            alt="Favoritar produto"
          />
        </label>
      </div>
    </div>
  );
}

export default ItemList;

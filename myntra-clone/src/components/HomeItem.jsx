import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ? (
        <button
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}>
          <IoAddCircleOutline /> Add to Bag
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-danger"
          onClick={handleRemoveFromBag}>
          <MdDelete /> Remove
        </button>
      )}
    </div>
  );
};

HomeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    original_price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number.isRequired,
    return_period: PropTypes.string.isRequired,
    delivery_date: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeItem;

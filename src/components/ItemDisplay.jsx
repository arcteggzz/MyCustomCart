import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// React icons
import { FcExpand } from "react-icons/fc";
// import { GrFormEdit } from "react-icons/gr";
// import { FaNairaSign } from "react-icons/fa6";
// import { GrClose } from "react-icons/gr";

// Reducer actions
// import { deleteItem, updateItem, updatePrice } from "../features/Items";

//Single card component here.
const SingleCardComponent = ({ name, price, id }) => {
  //this is the local state that controls the toggling of the card state.
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{id}</p>
        <button onClick={() => setvisible(!visible)}>Toggle me</button>
        {visible ? (
          <>
            <p>I was the hidden price: {price}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const ItemDisplay = () => {
  const [hideAccordion, setHideAccordion] = useState(true);
  // const [nameVisibility, setNameVisibility] = useState(false);
  // const [priceVisibility, setPriceVisibility] = useState(false);
  // const [newItem, setNewItem] = useState("");
  // const [newPrice, setNewPrice] = useState("");

  // const dispatch = useDispatch();

  //you dont have to pass this in as a prop. You can fetch this list directly inside this component using your useselector.
  const itemList = useSelector((state) => state.items.value);

  // Handle Accordion
  const handleAccordion = () => {
    setHideAccordion(!hideAccordion);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <span className="text-xl font-medium">View Cart Items</span>
        <FcExpand
          className="font-medium cursor-pointer"
          onClick={handleAccordion}
        />
      </div>
      {hideAccordion ? (
        <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 xl:gap-x-10">
          {itemList.map((item) => {
            return (
              <>
                {/* single card component goes here. */}
                <SingleCardComponent
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                />
              </>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ItemDisplay;

SingleCardComponent.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
};

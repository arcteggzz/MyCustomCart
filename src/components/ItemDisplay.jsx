import { useState } from "react";
import { useSelector } from "react-redux";

// React icons
import { FcExpand } from "react-icons/fc";
import { GrFormEdit } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";


const ItemDisplay = () => {
  const [hideAccordion, setHideAccordion] = useState(true);

  // Handle Accordion
  const handleAccordion = () => {
    setHideAccordion(!hideAccordion);
  };

  const itemList = useSelector((state)=> state.items.value)
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
          {itemList.map((item)=>(
            <div className="shadow-lg rounded-xl p-5" key={item.id}>
              <img src={item.image} alt="item-image" className="rounded-xl w-full h-50" />
              <div className="flex flex-col gap-y-2.5 mt-5">
              <div className="flex items-center gap-x-1">
                <p className="font-medium text-xl">Item: {item.name}</p>
                <span>
                  <GrFormEdit className="font-medium text-2xl cursor-pointer" />
                </span>
              </div>
              <input
                type="text"
                className="p-2 border-solid border-2  border-gray-400 rounded-xl"
                placeholder="Update Name Of Item"
                required
              />
              <button className="bg-slate-800 p-2 rounded-xl text-slate-100">
                Submit
              </button>
              <div className="flex items-center justify-end gap-x-1">
                <span>
                  <GrFormEdit className="font-medium text-2xl cursor-pointer" />
                </span>
                <p className="font-medium text-xl">Price:</p>
                <div className="flex items-center">
                  <FaNairaSign className="text-green-400" />
                  <p className="font-medium text-xl text-green-400">{item.price}</p>
                </div>
              </div>
              <input
                type="number"
                className="p-2 border-solid border-2  border-gray-400 rounded-xl"
                placeholder="Update Price of Item"
                step="0.01"
                min="0"
                required
              />
              <button className="bg-slate-800 p-2 rounded-xl text-slate-100">
                Submit
              </button>
            </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ItemDisplay;

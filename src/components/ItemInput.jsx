import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/Items";

// React icons
import { FcExpand } from "react-icons/fc";
import { GrFormEdit } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { deleteItem, updateItem, updatePrice,toggleVisibility } from "../features/Items";

const ItemInput = ({id}) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [newItem, setNewItem] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [image, setImage] = useState("");

  const itemList = useSelector((state) => state.items.value);
  const isVisible = useSelector((state)=> state.items.value[id]);
  const dispatch = useDispatch();

  const [hideAccordion, setHideAccordion] = useState(true);

  // Handle Accordion
  const handleAccordion = () => {
    setHideAccordion(!hideAccordion);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: itemList[itemList.length - 1].id + 1,
        image: image,
        name: item,
        price: price.toLocaleString(),
      })
    );
    setItem("");
    setImage("");
    setPrice("");
    console.log(price);
  };
  return (
    <>
      <div className="mb-10">
        <h4 className="text-xl font-medium mb-5 xl:text-2xl">Fill This Form</h4>
        <form
          action=""
          className="flex flex-col gap-y-2.5 md:w-2/4 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="xl:text-base">
            Name Of Item
          </label>
          <input
            type="text"
            value={item}
            className="p-2 border-solid border-2  border-gray-400 rounded-xl"
            placeholder="Name of Item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
            required
          />
          <label htmlFor="" className="xl:text-base">
            Item Image:
          </label>
          <input
            type="file"
            name=""
            accept="image/*"
            id=""
            onChange={handleImage}
            required
          />
          <label htmlFor="" className="xl:text-base">
            Price Of Item
          </label>
          <input
            type="number"
            value={price}
            className="p-2 border-solid border-2  border-gray-400 rounded-xl"
            placeholder="Price of Item"
            step="0.01"
            min="0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
          <button className="bg-slate-800 p-2 rounded-xl text-slate-100">
            Update Wishlist
          </button>
        </form>
      </div>
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
            {itemList.map((item) => (
              <div className="shadow-lg rounded-xl p-5" key={item.id}>
                <GrClose
                  className="mb-5 font-black cursor-pointer text-red-950"
                  onClick={() => {
                    dispatch(deleteItem({ id: item.id }));
                  }}
                />
                <img
                  src={item.image}
                  alt="item-image"
                  className="rounded-xl w-full h-50"
                />
                <div className="flex flex-col gap-y-2.5 mt-5">
                  <div className="flex items-center gap-x-1">
                    <p className="font-medium text-xl">Item: {item.name}</p>
                    <span>
                      <GrFormEdit
                        className="font-medium text-2xl cursor-pointer"
                        onClick={()=> dispatch(toggleVisibility(console.log(id)))}
                      />
                    </span>
                  </div>
                    <div className="flex flex-col gap-y-2.5">
                      <input
                        type="text"
                        className="p-2 border-solid border-2  border-gray-400 rounded-xl"
                        placeholder="Update Name Of Item"
                        onChange={(e) => {
                          setNewItem(e.target.value);
                        }}
                        required
                      />
                      <button
                        className="bg-slate-800 p-2 rounded-xl text-slate-100"
                        onClick={() => {
                          dispatch(updateItem({ id: item.id, item: newItem }));
                        }}
                      >
                        Update Item Name
                      </button>
                    </div>
                  <div className="flex items-center justify-end gap-x-1">
                    <span>
                      <GrFormEdit className="font-medium text-2xl cursor-pointer" />
                    </span>
                    <p className="font-medium text-xl">Price:</p>
                    <div className="flex items-center">
                      <FaNairaSign className="text-green-400" />
                      <p className="font-medium text-xl text-green-400">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <input
                    type="number"
                    className="p-2 border-solid border-2  border-gray-400 rounded-xl"
                    placeholder="Update Price of Item"
                    onChange={(e) => {
                      setNewPrice(e.target.value);
                    }}
                    step="0.01"
                    min="0"
                    required
                  />
                  <button
                    className="bg-slate-800 p-2 rounded-xl text-slate-100"
                    onClick={() => {
                      dispatch(updatePrice({ id: item.id, price: newPrice }));
                    }}
                  >
                    Update Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ItemInput;

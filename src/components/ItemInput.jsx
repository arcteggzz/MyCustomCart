import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../features/Items";
import ItemDisplay from "./ItemDisplay";

const ItemInput = () => {
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const itemList = useSelector((state)=> state.items.value)

  const handleImage = (e) =>{
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

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
    setItem('')
    setImage('')
    setPrice('')
    console.log(image)
  };
  return (
    <>
      <div className="mb-10">
        <h4 className="text-xl font-medium mb-5 xl:text-2xl">Fill This Form</h4>
        <form
          action=""
          className="flex flex-col gap-y-2.5 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="xl:text-base">
            Name Of Item
          </label>
          <input
            type="text"
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
      <ItemDisplay itemList={itemList}/>
    </>
  );
};

export default ItemInput;

import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import MainCart from "./MainCart";

function Homecard() {
  const [show, setShow] = useState(false);
  const handleAddnote = () => {
    setShow(true)
    
  };
  return (
    <>
      {show ? (
        <MainCart />
      ) : (
        <div className="flex justify-center items-center">
          <div className="h-[400px] w-[600px] bg-slate-40 bg-slate-200 mt-[150px] rounded-xl text-center">
            <p className="text-[30px] font-bold pt-4">Add Your Notes</p>
            <div className="flex justify-center items-center ">
              <button
                onClick={handleAddnote}
                className="bg-gray-500 rounded-xl px-16 p-4 mt-28 font-bold text-[25px] hover:bg-black hover:text-white flex justify-center items-center "
              >
                <HiPlus /> Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Homecard;

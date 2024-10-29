import React, { useState, useEffect } from "react";
import { MdSaveAlt } from "react-icons/md";

function MainCart() {
  const [text, setText] = useState(""); 
  const [savedContent, setSavedContent] = useState([]); 

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("savedata")) || [];
    setSavedContent(existingData); // Load saved content from local storage on component mount
  }, []);

  const itemSave = () => {
    const noteData = { content: text };
    const updatedData = [...savedContent, noteData];
    
    setSavedContent(updatedData); 
    localStorage.setItem("savedata", JSON.stringify(updatedData));
    setText('');
   
  };

  const deleteItem = (index) => {
    const updatedData = savedContent.filter((_, i) => i !== index); // Remove item at specific index
    setSavedContent(updatedData);
    localStorage.setItem("savedata", JSON.stringify(updatedData)); // Update localStorage with new data
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="mx-10 mt-[150px]">
          <p className="font-bold text-[40px] mt-10">Enter your text here</p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)} 
            className="w-[555px] h-[200px] border border-gray-800 rounded p-2"
          ></textarea>
          <div>
            <button
              onClick={itemSave}
              className="bg-gray-200 rounded-xl px-10 p-2 mt-5 font-bold text-[15px] hover:bg-black hover:text-white flex items-center"
            >
              <MdSaveAlt /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Display each saved content entry as a separate card with delete button */}
      <div className="flex justify-center mt-10 flex-col items-center">
        {savedContent.map((note, index) => (
          <div key={index} className="w-[555px] bg-gray-100 border border-gray-800 rounded p-4 mb-4">
            <h2 className="font-bold text-[20px] mb-2">Saved Content {index + 1}:</h2>
            <p>{note.content}</p>
            <button
              onClick={() => deleteItem(index)}
              className="bg-gray-500 text-white rounded px-4 py-2 mt-2 hover:bg-gray-700"
            >
              Delete
            </button>
          </div>
        ))}

        
      </div>
    </>
  );
}

export default MainCart;

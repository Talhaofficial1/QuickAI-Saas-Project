import { Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveBackground = () => {

   const [selectInput, setSelectedInput] = useState("");
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
    };


  return (
    <div className="flex ">
      {/* left div */}
      <div className="h-full p-6 flex flex-wrap items-start flex-start gap-4 text-slate-700">
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-lg p-4 flex items-start flex-wrap gap-4 bg-white rounded-lg border"
        >
          <div className="w-full flex gap-3">
            <Sparkles className="w-6 text-[#FF6A00]" />
            <h1 className="font-bold ">Background Removal</h1>
          </div>

          <p>Upload Image</p>
          <input
            onChange={(e) => setSelectedInput(e.target.files[0])}
            className="w-full px-3 p-2 rounded-md border rounded-gray-300 outline-none text-sm
             text-gray-600 "
            type="file"
            accept='image/*'
            required
          />

          <p className='text-sm text-gray-500'>Support JPEG,PNG and other image formats</p>

          <button
            className="text-xs w-full flex justify-center items-center border rounded-lg rounded-blue-500 
              mt-6 p-1 gap-2 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]  text-white">
            <Eraser className="w-5" />
            Remove Background
          </button>

        </form>

      </div>
      {/* right div */}

      <div className="w-full max-w-lg p-6 flex flex-col bg-white min-h-[200px]">
  
  <div className="mt-2 flex items-center gap-2">
    <Eraser className="w-5 h-5 text-[#FF6A00]"/>
    <h2 className="text-xl font-semibold">Processed Image</h2>
  </div>

  
  <div className="flex-1 flex justify-center items-center cursor-pointer">
    <div className="text-sm flex flex-col justify-center items-center gap-5">
      <Eraser className="w-9 h-9 text-gray-500" />
      <p className="text-gray-500">Enter a topic and click "Remove Background" to get started</p>
    </div>
  </div>
</div>



    </div>
  );
}

export default RemoveBackground

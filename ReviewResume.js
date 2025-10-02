import { FileText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const ReviewResume = () => {
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
            <Sparkles className="w-6 text-[green]" />
            <h1 className="font-bold text-gray-600">Review Resume</h1>
          </div>

          <p className='text-sm text-gray-500'>Upload Resume</p>
          <input
            onChange={(e) => setSelectedInput(e.target.files[0])}
            className="w-full px-3 p-2 rounded-md border rounded-gray-300 outline-none text-sm
             text-gray-600 "
            type="file"
            accept='image/*'
            required
          />

          <p className='text-sm text-gray-500'>Support PDF,JPEG,PNG formats</p>

          <button
            className="text-xs w-full flex justify-center items-center border rounded-lg rounded-blue-500 
              mt-6 p-1 gap-2 bg-gradient-to-r from-[#32CD32] to-[#006400]  text-white">
            <FileText className="w-5" />
            Review Resume
          </button>

        </form>

      </div>
      {/* right div */}

      <div className="w-full max-w-lg p-6 flex flex-col bg-white min-h-[200px] max-h[600px]">
  
  <div className="mt-2 flex items-center gap-2">
    <FileText className="w-5 h-5 text-[green]"/>
    <h2 className="text-xl font-semibold text-gray-600">Analysis Results</h2>
  </div>

  
  <div className="flex-1 flex justify-center items-center cursor-pointer">
    <div className="text-sm flex flex-col justify-center items-center gap-5">
      <FileText className="w-9 h-9 text-gray-500" />
      <p className="text-gray-500">Enter a topic and click "Review Resume" to get started</p>
    </div>
  </div>
</div>



    </div>
  );
}

export default ReviewResume

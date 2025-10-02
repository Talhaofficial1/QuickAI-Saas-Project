import { Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const GenerateImages = () => {
  const SelectImage = ["Realistic" , "Ghibli Style" , "Anime Style" ,
    "Cartoon Style" , "Fantasy Style" , "3D Style" , "Portrait Style"];
   
      
  const [SelectCategory, SetSelectCategory] = useState("Realistic"); 
  const [selectInput, setSelectedInput] = useState("");
  const [Publish , SetPublish] = useState(false);

  const onSubmitHndler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex ">
      {/* left div */}
      <div className="h-full p-6 flex flex-wrap items-start flex-start gap-4 text-slate-700">
        <form
          onSubmit={onSubmitHndler}
          className="w-full max-w-lg p-4 flex items-start flex-wrap gap-4 bg-white rounded-lg border"
        >
          <div className="w-full flex gap-3">
            <Sparkles className="w-6 text-[#39FF14]" />
            <h1 className="font-bold ">AI Image Generator</h1>
          </div>

          <p>Describe Your Image</p>
          <textarea
            onChange={(e) => setSelectedInput(e.target.value)}
            value={selectInput}
            className="w-full px-3 min-h-30 p-2 border rounded-border-lg outline-none"
            type="text"
            placeholder="Describe what you want to see in the image"
            required
          />

          <p className='font-bold'>Style</p>
          <div className=" gap-2 w-full flex items-center justify-center flex-wrap">
            {SelectImage.map((item) => (
              <span
                onClick={() => SetSelectCategory(item)}
                className={` px-4 py-1 border rounded-full 
              cursor-pointer text-xs mt-2 ${
                SelectCategory === item
                  ? "bg-blue-50 text-green-500 border border-gray-500"
                  : "text-gray-500"
              }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>


           {/* for make the image public */}
              <div className='my-6 flex items-center gap-2'>
                <label className='relative cursor-pointer'>
                    <input type='checkbox' onChange={(e) => SetPublish(e.target.checked)}
                    checked = {Publish} className='sr-only peer' /> 
                    <div className='w-9 h-5 bg-slate-500 rounded-full
                    peer-checked:bg-green-500 transition'></div>
                    <div className='absolute left-1 top-1 w-3 h-3 bg-white 
                    rounded-full transition peer-checked:translate-x-4'></div> 

                    
                </label>
                <p>Make this image Public</p>
              </div>

          <button
            className="text-xs w-full flex justify-center items-center border rounded-lg rounded-blue-500 
              mt-6 p-1 gap-2 bg-gradient-to-r from-[#66FF70] to-[#32CD32] text-white">
            <Image className="w-5" />
            Generate Image
          </button>

        </form>

      </div>
      {/* right div */}

      <div className="w-full max-w-lg p-6 flex flex-col bg-white min-h-[200px]">
  
  <div className="mt-2 flex items-center gap-2">
    <Image className="w-5 h-5 text-[lightgreen]"/>
    <h2 className="text-xl font-semibold">Generate Title</h2>
  </div>

  
  <div className="flex-1 flex justify-center items-center cursor-pointer">
    <div className="text-sm flex flex-col justify-center items-center gap-5">
      <Image className="w-9 h-9 text-gray-500" />
      <p className="text-gray-500">Enter a topic and click "Generate Image" to get started</p>
    </div>
  </div>
</div>



    </div>
  );
   
  
}

export default GenerateImages

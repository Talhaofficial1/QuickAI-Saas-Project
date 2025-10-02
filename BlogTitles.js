import { Edit, Hash, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const BlogTitles = () => {
  const BlogCategories = ["General" , "Technology" , "Business" , "Health" ,
    "LifeStyle" , "Education" , "Travel" , "Food"];
  const [SelectCategory, SetSelectCategory] = useState("General");
  const [selectInput, setSelectedInput] = useState("");

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
            <Sparkles className="w-6 text-[#8E37EB]" />
            <h1 className="font-bold ">AI Title Generator</h1>
          </div>

          <p>Keyword</p>
          <input
            onChange={(e) => setSelectedInput(e.target.value)}
            value={selectInput}
            className="w-full px-3 p-2 border rounded-border-lg outline-none"
            type="text"
            placeholder="The future of Artificial intelligent"
            required
          />

          <p>Category</p>
          <div className=" gap-2 w-full flex items-center justify-center flex-wrap">
            {BlogCategories.map((item) => (
              <span
                onClick={() => SetSelectCategory(item)}
                className={` px-4 py-1 border rounded-full 
              cursor-pointer text-xs mt-3 ${
                SelectCategory === item
                  ? "bg-purple-50 text-purple-500 border border-gray-500"
                  : "text-gray-500"
              }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <button
            className="text-xs w-full flex justify-center items-center border rounded-lg rounded-blue-500 
              mt-6 p-1 gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB]  text-white">
            <Hash className="w-5" />
            Generate Title
          </button>

        </form>

      </div>
      {/* right div */}

      <div className="w-full max-w-lg p-6 flex flex-col bg-white min-h-[200px]">
  
  <div className="mt-2 flex items-center gap-2">
    <Hash className="w-5 h-5 text-[#4A7AFF]"/>
    <h2 className="text-xl font-semibold">Generate Title</h2>
  </div>

  
  <div className="flex-1 flex justify-center items-center cursor-pointer">
    <div className="text-sm flex flex-col justify-center items-center gap-5">
      <Hash className="w-9 h-9 text-gray-500" />
      <p className="text-gray-500">Enter a topic and click "Generate Title" to get started</p>
    </div>
  </div>
</div>



    </div>
  );
}

export default BlogTitles

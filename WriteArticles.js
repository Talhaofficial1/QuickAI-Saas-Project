import { Edit, Sparkles } from "lucide-react";
import React, { useState } from "react";

const WriteArticles = () => {
  const ArticalLength = [
    { length: 800, text: "Short(500 - 800 words)" },
    { length: 1200, text: "Medium(800 - 1200 words)" },
    { length: 1600, text: "Long(1200+)" },
  ];
  const [selectedLength, setSelectedLength] = useState([0]);
  const [selectInput, setSelectedInput] = useState("");

  const onSubmitHndler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex ">
      {/* left div */}
      <div className="h-full overflow-y-scroll p-6 flex items-start flex-start gap-4 text-slate-700">
        <form
          onSubmit={onSubmitHndler}
          className="w-full max-w-lg p-4 flex items-start flex-wrap gap-4 bg-white rounded-lg border"
        >
          <div className="w-full flex gap-3">
            <Sparkles className="w-6 text-[#4A7AFF]" />
            <h1 className="font-bold ">Artical Configuration</h1>
          </div>

          <p>Artical Topic</p>
          <input
            onChange={(e) => setSelectedInput(e.target.value)}
            value={selectInput}
            className="w-full px-3 p-2 border rounded-border-lg outline-none"
            type="text"
            placeholder="The future of Artificial intelligent"
            required
          />

          <p>Article Length</p>
          <div className="w-full flex items-center justify-around">
            {ArticalLength.map((item, index) => (
              <span
                onClick={() => setSelectedLength(item)}
                className={`px-4 py-1 border rounded-full 
              cursor-pointer text-xs ${
                selectedLength.text === item.text
                  ? "bg-blue-50 text-blue-500 border border-gray-500"
                  : "text-gray-500"
              }`}
                key={index}
              >
                {item.text}
              </span>
            ))}
          </div>

          <button
            className="text-xs w-full flex justify-center items-center border rounded-lg rounded-blue-500 
              mt-6 p-1 gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF]  text-white">
            <Edit className="w-5" />
            Generate Article
          </button>

        </form>

      </div>
      {/* right div */}

      <div className="w-full max-w-lg p-6 flex flex-col bg-white min-h-[200px]">
  
  <div className="mt-2 flex items-center gap-2">
    <Edit className=" text-blue-500"/>
    <h2 className="text-xl font-semibold">Generate Article</h2>
  </div>

  
  <div className="flex-1 flex justify-center items-center cursor-pointer">
    <div className="text-sm flex flex-col justify-center items-center gap-5">
      <Edit className="w-9 h-9 text-gray-500" />
      <p className="text-gray-500">Enter a topic and click "Generate Article" to get started</p>
    </div>
  </div>
</div>



    </div>
  );
};

export default WriteArticles;

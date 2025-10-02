import React, { useState } from "react";
import Markdown from "react-markdown";

const CreationsItemsForDashbord = ({ item }) => {
  const [expanded, setexpanded] = useState(false);

  return (
    <div
      onClick={() => setexpanded(!expanded)}
      className="max-w-4xl cursor-pointer"
    >
      {/* row container */}
      <div className="bg-white p-6 flex items-center justify-between rounded-lg shadow">
        {/* left side */}
        <div className="text-sm text-slate-600">
          <h2 className="font-semibold">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} -{" "}
            {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* right side button */}
        <button
          className="px-4 py-2 bg-[#EFF6FF] text-blue-500 rounded-lg text-sm 
                     hover:bg-blue-600 hover:text-white transition"
        >
          {item.type}
        </button>
      </div>

      {/* expanded content */}
      {expanded && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="image"
                className="mt-3 w-full max-w-md rounded-lg shadow"
              />
            </div>
          ) : (
            <div className="mt-3 h-full max-h-64 overflow-y-scroll text-sm text-slate-700 bg-white p-3 rounded-lg border">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationsItemsForDashbord;

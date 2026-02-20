import React from 'react';

export default function Btn ({ children, outline }){
 return (
  <button
    className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
      outline
        ? "border border-gray-200 text-gray-700 hover:bg-gray-100"
        : "bg-blue-600 text-white hover:bg-blue-700 shadow"
    }`}
  >
    {children}
  </button>
)};
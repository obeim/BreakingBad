import React from "react";
const Quote = ({ quote: { quote, author } }) => {
  return (
    <div
      className='text-gray-200 mx-3 shadow-xl rounded p-3   bg-gradient-to-r
    from-green-400
    to-green-600'
    >
      <h3>' {quote} '</h3>
      <h1 className='text-lg font-bold text-green-900'>{author}</h1>
    </div>
  );
};

export default Quote;

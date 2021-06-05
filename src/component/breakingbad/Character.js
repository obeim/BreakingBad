//import React from "react";
const Character = ({ ch: { status, name, img, birthday, char_id } }) => {
  const mouseEnter = () => {
    const info = document.querySelector(`#info${char_id}`);
    info.classList.remove("md:hidden");
  };
  const mouseLeave = () => {
    const info = document.querySelector(`#info${char_id}`);
    info.classList.add("md:hidden");
  };
  return (
    <div
      className='border-4 border-green-900 rounded  shadow-xl   text-gray-700 my-3  overflow-hidden relative  md:h-96 h-full '
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src={img} alt='' className='md:w-80 h-full  w-72 object-cover' />
      <div className=' h-full absolute md:opacity-0 md:hover:opacity-100 duration-500  delay-75 ease-in transition  opacity-100  bottom-0 w-full'>
        <div
          id={`info${char_id}`}
          className=' bg-white absolute bottom-0 w-full md:hidden block bottom-0 p-1 w-9/12'
        >
          <h3 className='my-2'>
            <span className='font-bold '> Name : </span>
            {name}
          </h3>
          <h3 className='my-2'>
            <span className='font-bold '>Status: </span>
            {status}
          </h3>
          <h3 className='my-2'>
            <span className='font-bold '>birthday: </span>
            {birthday}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Character;

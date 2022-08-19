import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className='form'>
      <div className='emailtext'>DEV@Deakin</div>
      <div className='form1'>
        <button className='ai'>
          <AiOutlineSearch size={22} />
        </button>
        <input className='search' type='text' placeholder='Search...'></input>
      </div>
      <button className='button'>Post</button>
      <button className='button'>Login</button>
    </div>
  );
}
export default SearchBar;

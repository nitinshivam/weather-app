import { useState } from "react";

interface SearchBarProp {
  setLoc: (loc:string) => void;
}

const SearchBar = ({setLoc}:SearchBarProp) => {

  const [inputVal,setInputVal]= useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setLoc(inputVal);
    setInputVal("");
  }
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}} className="flex justify-center gap-2 w-full h-14 my-8">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={inputVal}
        onChange={(e)=>{setInputVal(e.target.value)}}
        className="border border-black rounded-full h-14 pl-6 w-80 placeholder:text-gray-500"
        placeholder="Search"
      />
      <button
        type="submit"
        className="flex justify-center items-center bg-cover bg-center bg-no-repeat w-14 h-14 bg-white rounded-full"
      >
        <img src="search.svg" alt="Search" className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchBar;

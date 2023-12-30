import SearchBar from "./SearchBar";
import Weather from "./Weather";

interface CardProp {
  setLoc: (loc:string) => void;
  loc: string;
}

const Card = ({setLoc,loc}:CardProp) => {
  return (
    <div className="flex flex-col justify-center h-[32rem] w-[28rem] bg-[#4e0ce2] rounded-lg">
      <SearchBar setLoc={(loc:string)=>setLoc(loc)}/>
      <Weather loc={loc}/>
    </div>
  );
};

export default Card;

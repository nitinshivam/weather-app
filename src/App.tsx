import Card from "./components/Card";
import { useEffect, useState } from "react";

const App = () => {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const ipData = async () => {
      try {
        const response = await fetch(`https://ipwho.is/`);
        const result = await response.json();
        console.log(result);
        setLocation(result.city);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    ipData();
  }, []);

  return (
      location && (<div className="flex justify-center items-center h-screen w-screen bg-[#050946] font-sans">
        <Card setLoc={(loc: string) => setLocation(loc)} loc={location}/>
      </div>)
  );
};

export default App;

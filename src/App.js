import "./App.css";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";




function App() {


  return (
    <div className="w-full h-full flex flex-col items-center background relative">
        <h1 className="bg-white rounded-lg  w-11/12 text-center mt-[40px]  px-10 py-2 text-4xl font-bold">
          RANDOM GIFS</h1>
        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
          <Random/>
          <Tag/>
          <br/>
          <br/>
        </div>
    </div>
  );
}

export default App;


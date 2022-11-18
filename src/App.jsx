import Navbar from "./components/navbar/Navbar";
import Hats from "./pages/Hats";
// import Home from "./pages/Home";

const App = () => {
   return (
      <div className="app">
         <header>
            <Navbar />
         </header>
         <Hats />
      </div>
   );
};
export default App;

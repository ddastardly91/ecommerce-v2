import Categories from "../components/categories/Categories";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <main>
            <Categories />
         </main>
      </>
   );
};
export default Home;

import { useContext } from "react";
import Products from "../components/products/Products";
import { MyContext } from "../context/context";

const Hats = () => {
   const context = useContext(MyContext);

   return (
      <div>
         <Products products={context.categories[0].products} />
      </div>
   );
};
export default Hats;

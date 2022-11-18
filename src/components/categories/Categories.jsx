import "./Categories.scss";
import Category from "./Category";
import { useContext } from "react";
import { MyContext } from "../../context/context";

const Categories = () => {
   const context = useContext(MyContext);

   return (
      <div className="categories-container">
         {context.categories.map((category) => (
            <Category key={category.id} data={category} />
         ))}
      </div>
   );
};
export default Categories;

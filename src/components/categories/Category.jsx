import "./Category.scss";

const Category = ({ data: { imageURL, name } }) => {
   return (
      <div className="category-container">
         <div
            className="bg-image"
            style={{ backgroundImage: `url(${imageURL})` }}
         />
         <div className="category-body">
            <h2>{name}</h2>
            <p>Shop Now</p>
         </div>
      </div>
   );
};
export default Category;

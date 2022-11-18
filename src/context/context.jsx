import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
   const [categories, setCategories] = useState([
      {
         id: 1,
         name: "Hats",
         imageURL:
            "https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      {
         id: 2,
         name: "Jackets",
         imageURL:
            "https://images.unsplash.com/photo-1513091550446-33297bfca05b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      {
         id: 3,
         name: "Sneakers",
         imageURL:
            "https://images.unsplash.com/photo-1630497569446-92fc8a0e6c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      },
      {
         id: 4,
         name: "Womens",
         imageURL:
            "https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      {
         id: 5,
         name: "Mens",
         imageURL:
            "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
   ]);

   return (
      <MyContext.Provider
         value={{
            categories,
         }}
      >
         {children}
      </MyContext.Provider>
   );
};

export { MyContext, MyProvider };

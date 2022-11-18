import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
   const [categories, setCategories] = useState([
      {
         id: 1,
         name: "Hats",
         imageURL:
            "https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
         products: [
            {
               id: "hat1",
               name: "Ribbed Turn Up Beanie",
               gender: "female",
               price: 12.0,
               colors: [
                  {
                     name: "Green",
                     hex: "#8ACDAD",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/241021321?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Blue",
                     hex: "#93D1FE",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/241021244?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Black",
                     hex: "#000",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/241021261?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Red",
                     hex: "#BA1F4D",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/241021263?$rsp-pdp-port-640$",
                  },
               ],
            },
            {
               id: "hat2",
               name: "Cashmere Knitted Beanie",
               gender: "male",
               price: 30.0,
               colors: [
                  {
                     name: "Wine",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/240732661?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Charcoal",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/240732673?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Forest",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/240732670?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Navy",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/240732672?$rsp-pdp-port-640$",
                  },
               ],
            },
            {
               id: "hat3",
               name: "Cashmere Roll Beret",
               gender: "female",
               price: 32.0,
               colors: [
                  {
                     name: "Black",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/239808349?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Light Blue",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/239808351?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Light Gray",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/239808339?$rsp-pdp-port-640$",
                  },
                  {
                     name: "Berry",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/240609183?$rsp-pdp-port-640$",
                  },
               ],
            },
            {
               id: "hat4",
               name: "Herringbone Bakerboy Cap",
               gender: "male",
               price: 26.0,
               colors: [
                  {
                     name: "Gray",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/006147199?$rsp-pdp-port-640$",
                  },
               ],
            },
            {
               id: "hat5",
               name: "Felted Wool Cap",
               price: 18.75,
               colors: [
                  {
                     name: "Navy",
                     imageURL:
                        "https://johnlewis.scene7.com/is/image/JohnLewis/241008685?$rsp-pdp-port-640$",
                  },
               ],
            },
         ],
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

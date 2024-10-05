import React from "react";
import Routing from "./Components/Routing";
import { CartProvider } from "./Pages/Cartcontext";

const App = () => {
  return (
      <CartProvider>
        <Routing />
      </CartProvider>
  );
};

export default App;

import "./App.css";

// Task 1 //
import Greeting from "../Greeting/Greeting";
import userItems from "../Data/userItems.js";

//Task 2
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import shoppingListItems from "../Data/ShoppingListItems.js";

//Task 3
import OrderStatus from "../OrderStatus/OrderStatus.jsx";
import orderStatusItems from "../Data/orderStatusItems.js";

function App() {

  return (
    <div className="container">
      <Greeting name = {userItems[0].name} />

      <ShoppingList items = {shoppingListItems} />

      <OrderStatus {...orderStatusItems[0]} />
    
    </div>
  )
}

export default App;

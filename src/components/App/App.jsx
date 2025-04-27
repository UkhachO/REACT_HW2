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
      <div>
        <h3>Задание 1:</h3>
        <Greeting name = {userItems[0].name} />
      </div>

      <div>
        <h3>Задание 2:</h3>
        <p>Список покупок:</p>
        <ShoppingList items = {shoppingListItems} />
      </div>

      <div>
        <h3>Задание 3:</h3>
        <OrderStatus {...orderStatusItems[0]} />
      </div>
    
    </div>
  )
}

export default App;

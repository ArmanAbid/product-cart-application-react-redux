import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";
function App() {
  const [pageRender,setPageRender] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar setPageRender={setPageRender}/>
        {pageRender?<CartContainer/>:<ProductContainer/>}
      </div>
    </Provider>
  );
}
export default App;

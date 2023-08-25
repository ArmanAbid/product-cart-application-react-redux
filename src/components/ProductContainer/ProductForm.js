import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Product/action";

export default function ProductFrom() {
  const dispatch = useDispatch();
  const [userInputs, setUserInputs] = useState({
      productName: "",
      category: "",
      imageUrl: "",
      price: "",
      quantity: "",
  });
  const handleChange = (e) => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(userInputs));
    setUserInputs({
      productName: "",
      category: "",
      imageUrl: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={(e) => handleSubmit(e)}>
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              name="productName"
              value={userInputs.productName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              name="category"
              value={userInputs.category}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              name="imageUrl"
              value={userInputs.imageUrl}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                name="price"
                value={userInputs.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                name="quantity"
                value={userInputs.quantity}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
}

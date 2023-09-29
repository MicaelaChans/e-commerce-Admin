import React from "react";
import Sidebar from "./SideBar";
import { ToastContainer } from "react-toastify";
import "../css/Products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Product() {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const authToken = useSelector((state) => state.admin.authToken);
  const [products, setProducts] = useState([]);
  const [newProperties, setNewProperties] = useState({
    height: "",
    width: "",
    depth: "",
    nominalPower: "",
    efficiency: "",
    consumption: "",
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
    otherProperties: {
      newProperties,
    },
    stock: "",
    price: "",
    category: "",
    orders: 0,
  });

  const [categorys, setCategorys] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
    products: [],
  });

  const getProducts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/products`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategorys = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/categorys`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setCategorys(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${apiUrl}/products`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: newProduct,
      });
      console.log("Product added successfully");
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      // const response = await axios({
      // 	method: "DELETE",
      // 	url: `${apiUrl}/products/${productId}`,
      // 	headers: {
      // 		Authorization: `Bearer ${authToken}`,
      // 	},
      // });
      // console.log("Product deleted successfully", response.data);
      // // getProducts();
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${apiUrl}/categorys`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: newCategory,
      });
      console.log("Category added successfully");
      getProducts();
      getCategorys();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChangeProduct = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleInputChangeProperties = (e) => {
    const { name, value } = e.target;
    setNewProperties((prevProperties) => ({
      ...prevProperties,
      [name]: value,
    }));
  };

  const handleInputChangeCategroy = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  useEffect(() => {
    getProducts();
    getCategorys();
  }, []);

  return (
    <>
      <div className="container ">
        <Sidebar />
        <section className="home">
          <div className="text">Products</div>
          <div className="container">
            <div className="border box rounded shadow p-3">
              <form className="" onSubmit={handleSubmitProduct}>
                <div className="row">
                  <div className="col-6">
                    <h4>Add Product</h4>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChangeProduct}
                        required
                      />
                      <label>Product Name</label>
                    </div>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        id="floatingTextarea2"
                        style={{ height: "125px" }}
                        type="text"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChangeProduct}
                        required
                      />
                      <label htmlFor="floatingTextarea2">Description</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChangeProduct}
                        required
                      />
                      <label>Image</label>
                    </div>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Select Category"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChangeProduct}
                        required
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        {categorys.map((category) => (
                          <option key={category.id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="floatingSelect">Select Category</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="number"
                        name="stock"
                        value={newProduct.stock}
                        onChange={handleInputChangeProduct}
                        required
                      />
                      <label>Stock</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="number"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChangeProduct}
                        required
                      />
                      <label>Price</label>
                    </div>
                  </div>

                  <div className="col-6">
                    <h4>Properties</h4>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="height"
                        value={newProperties.height}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Height</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="width"
                        value={newProperties.width}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Width</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="depth"
                        value={newProperties.depth}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Depth</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="nominalPower"
                        value={newProperties.nominalPower}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Nominal Power</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="efficiency"
                        value={newProperties.efficiency}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Efficiency</label>
                    </div>
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="consumption"
                        value={newProperties.consumption}
                        onChange={handleInputChangeProperties}
                        required
                      />
                      <label>Consumption</label>
                    </div>
                    <button type="submit">Add Product</button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="border box rounded shadow mt-5 p-3"
              style={{ width: "50%" }}
            >
              <form className="" onSubmit={handleSubmitCategory}>
                <h4>Add category</h4>
                <div className="row">
                  <div className="col-8">
                    <div className="inputboxProduct">
                      <input
                        type="text"
                        name="name"
                        value={newCategory.name}
                        onChange={handleInputChangeCategroy}
                        required
                      />
                      <label>Category</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button className="mt-5" type="submit">
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-5 rounded shadow p-3 bg-dark">
              <h1 className="text text-center">Products List</h1>
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.name}</td>
                      <td>
                        {product.description.length > 50
                          ? `${product.description.substring(0, 50)}...`
                          : product.description}
                      </td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ maxWidth: "70px", maxHeight: "60px" }}
                        />
                      </td>
                      <td>{product.stock}</td>
                      <td>${product.price}</td>
                      <td>{product.category.name}</td>
                      <td className="d-flex justify-content-center gap-3">
                        <div>
                          <i className="bi bi-pencil text-white" />
                        </div>
                        <div>
                          <i
                            className="bi bi-trash3 text-white"
                            onClick={() => handleDeleteProduct(product._id)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ToastContainer position="top-right" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;

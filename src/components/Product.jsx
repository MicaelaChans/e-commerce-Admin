import React from 'react'
import Sidebar from './SideBar'
import { ToastContainer } from 'react-toastify';
import "../css/Products.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
	const authToken = localStorage.getItem("authToken");
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios({
					method: "GET",
					url: "http://localhost:8000/products",
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				});
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [authToken]);

	console.log(products)

	return (
		<>
			<div className="container ">
				<Sidebar />
				<section className="home">
					<div className="text">Products</div>
					<div className="container">
						<div className="text text-center">Add</div>
						<div className="border box rounded shadow p-3">
							<form className="">
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Product Name</label>
								</div>
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Description</label>
								</div>
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Image</label>
								</div>
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Stock</label>
								</div>
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Price</label>
								</div>
								<div className="inputboxProduct">
									<input
										type="text"
										name="Username"
										// value={""}
										// onChange={""}
										required
									/>
									<label>Category</label>
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
													style={{ maxWidth: '70px', maxHeight: '60px' }}
												/>
											</td>
											<td>{product.stock}</td>
											<td>{product.price}</td>
											<td>{product.category.name}</td>
											<td className="d-flex justify-content-center gap-3">
												<div>
													<i className="bi bi-pencil text-white"></i>
												</div>
												<div>
													<i className="bi bi-trash3 text-white"></i>
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
	)
}

export default Product
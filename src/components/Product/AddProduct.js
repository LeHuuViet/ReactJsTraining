import React from 'react'
import { Link } from 'react-router-dom'
import './AddProduct.scss'
 
function AddProduct() {
  return (
    <div className="AddProduct">
        <div>
            <Link to="/pages/products">
            <button>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                </button>
            </Link>
                </div>
                <div>
                    <h2>Add Product</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <label>Vendor</label>
                            <input  />
                        </li>
                        <li>
                            <label>Product Title</label>
                            <input  />
                        </li>
                        <li>
                            <label>Brand</label>
                            <select></select>
                        </li>
                        <li>
                            <label>Condition</label>
                            <select></select>

                        </li>
                        <li>
                            <label>SKU</label>
                            <input    />

                        </li>
                        <li>
                            <label>Image</label>
                            <input />

                        </li>
                        <li>
                            <label>Category</label>
                            <select></select>
                        </li>
                        <li>
                            <label>Description</label>
                            <select></select>
        
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Prices & Inventory</h2>
                    <ul>
                        <li>
                            <label>Memberships</label>
                            <select></select>
                        </li>
                        <li>
                            <label>Tax class</label>
                            <div>
                                <label>default</label>
                                <div>
                                    <input type='checkbox' />
                                    <label>Tax Exempt</label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label>Price</label>
                            <input />
                        </li>
                        <li>
                            <label>Arrival date</label>
                            <input type='date'/>
                        </li>
                        <li>
                            <label>Quantity in stock</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Shipping</h2>
                    <ul>
                        <label>Continental U.S.</label>
                        <input />
                        <select></select>
                        <label>Add Shipping Location</label>
                    </ul>
                </div>
                <div>
                    <h2>Marketing</h2>
                    <ul>
                        <li>
                            <label>Open Graph meta tags</label>
                            <select>
                                <option>Autogenerated</option>
                                <option>Custom</option>
                            </select>
                        </li>
                        <li>
                            <label>Meta description</label>
                            <select>
                                <option>Autogenerated</option>
                                <option>Custom</option>
                            </select>
                        </li>
                        <li>
                            <label>Meta keywords</label>
                            <input />
                        </li>
                        <li>
                            <label>Product page title</label>
                            <input />
                            <p>Leave blank to use product name as Page Title.</p>
                        </li>
                        <li>
                            <label>Add to Facebook product feed</label>
                        </li>
                        <li>
                            <label>Add to Google product feed</label>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default AddProduct
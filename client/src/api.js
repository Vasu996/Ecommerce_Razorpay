import axios from "axios";

export async function fetchProduct(productId) {
  try {
    const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
    return response.data; // Return the product data
  } catch (error) {
    console.error("Error fetching product:", error.message);
    throw error; // Throw the error for handling in the calling function
  }
}
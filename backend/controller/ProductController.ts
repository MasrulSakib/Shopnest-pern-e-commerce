import { type Request, type Response } from "express";
import { sql } from "../config/db.ts";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await sql`
        SELECT * FROM products
        ORDER BY created_at DESC
        `;
    console.log("Products fetched successfully", products);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const createProduct = async (req: Request, res: Response) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price) {
    return res
      .status(400)
      .json({ error: "Name, image, and price are required" });
  }

  try {
    const newProduct = await sql`
    INSERT INTO products (name, image, price)
    VALUES (${name}, ${image}, ${price})
    RETURNING *
    `;
    console.log("Product created successfully", newProduct);
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await sql`
        SELECT * FROM products WHERE id = ${id}
    `;
    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const updatedProduct = await sql`
            UPDATE products
            SET name = ${name}, image = ${image}, price = ${price}
            WHERE id = ${id}
            RETURNING *
        `;
    if (updatedProduct.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Product updated successfully", updatedProduct);
    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedProduct = await sql`
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *
        `;
    if (deletedProduct.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Product deleted successfully", deletedProduct);
    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

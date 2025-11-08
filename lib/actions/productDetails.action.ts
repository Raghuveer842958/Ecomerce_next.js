"use server"

import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";

export const productDetails = async ( id: string) => {
    try {
        await dbConnect();
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log("Error in productDetails action :", error);
    }
}
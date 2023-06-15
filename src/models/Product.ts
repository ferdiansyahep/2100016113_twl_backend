import mongoose, { Schema, Document } from 'mongoose';


// Definisikan interface Product
export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  productCategory: string[];
  thumbnails: string[];
}

// Definisikan schema Product
const productSchema: Schema<Product> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  productCategory: [{ type: String }],
  thumbnails: [{ type: String }]
});

// Buat model Product
const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;

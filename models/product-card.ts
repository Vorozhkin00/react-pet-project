import * as mongoose from "mongoose";

export interface ProductCardProps extends Document {
  _id: string;
  name: string;
  description: string;
  price: string;
  stock: string;
  measurements: string;
  img: string;
}

const productCardSchema = new mongoose.Schema<ProductCardProps>({
  _id: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: String, required: true},
  stock: {type: String, required: true},
  measurements: {type: String, required: true},
  img: {type: String, required: true},
})

const ProductCard = mongoose.models.ProductCard || mongoose.model<ProductCardProps>('ProductCard', productCardSchema)
export default ProductCard;
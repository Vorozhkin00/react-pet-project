import {FC} from "react";
import SliderHomepage from "@/app/(panel)/homepage/components/slider-homepage";
import {Button} from "@/libs/design-system/ui/button/button";

export interface ProductCardProps {
  _id: string;
  name: string;
  description?: string;
  price: string;
  stock: string;
  measurements: string;
  img: string;
}

const ProductCard: FC<ProductCardProps> = ({_id, name, description, price, stock, measurements, img}) => {
  return (
    <div className='min-w-[262px] flex flex-col gap-3 mb-10 hover:border-2 rounded'>
      <div className='min-h-[348px] bg-neutral-200 flex justify-center items-center relative group'>
        <img className='w-[262px] object-cover' alt={name} src={img}/>
        <div className='absolute bottom-4 w-full px-4 invisible group-hover:visible'>
          <Button variant='default'>Add to cart</Button>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h1>
          {name}
        </h1>
        <div>${price}</div>
        <div>Measurements: {measurements}</div>

      </div>
    </div>
  )
}
export default ProductCard;
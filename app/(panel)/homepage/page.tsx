'use client'
import {FC, useEffect, useState} from "react";
import SliderHomepage from "@/app/(panel)/homepage/components/slider-homepage";
import ProductCard from "@/libs/components/product-card/product-card";
import {ArrowLeftIcon} from "@/libs/design-system/icons/arrowLeftIcon";
import Link from "next/link";
import {GetServerSideProps} from "next";
import {ProductCardProps} from "@/models/product-card";


let slides: string[] = [
  "https://res.cloudinary.com/dkjcanut1/image/upload/v1740679415/bmanvqjbcgnhxjbjr1vl.webp",
  "https://www.agatameble.pl/media/cache/resolve/filemanager_original_webp/images/aktualnosci/2024/12/_11_najsilniejsze_trendy_wntrzarskie_ktore_bd_nam_towarzyszy_w_2025_roku/desk/IMG_9687-3x2.webp",
  "https://www.agatameble.pl/media/cache/resolve/filemanager_original_webp/images/aktualnosci/2025/01/_14_kolor_roku_2025_mocha_mousse_jak_go_wprowadzi_do_wntrza/desk/IMG_9825-3x2.webp",
  "https://www.agatameble.pl/media/cache/filemanager_original/images/aktualnosci/2024/12/_20_biophilic_design__co_to_jest_i_jak_wyznacza_trendy_wntrzarskie/desk/IMG_8792-21.jpg",
]

let productCard = [
  "https://drive.google.com/drive/folders/1B6O1Kb5VXAZ1NpjlXt7cHUXcR8mOMxOX"
]
const Homepage: FC = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product-cards');
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='px-[160px]'>
      <div className='w-full max-w-[1200px] h-[536px] mx-auto'>
        <SliderHomepage slides={slides}/>
      </div>
      <div>
        <div className='flex py-12 justify-between '>
          <h2 className='text-headline4'>Arrivals</h2>
          <Link href='/shop'>
            <div className='flex gap-1 relative group items-center'>
              <button className='text-buttonsS'> More Products</button>
              <ArrowLeftIcon className='rotate-180 size-5 text-primary'/>
              <span
                className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 duration-300'></span>
            </div>
          </Link>
        </div>
        <div className='overflow-hidden'>
          <div className='flex gap-3 overflow-x-auto'>
            {products.map(product => (
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                measurements={product.measurements}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://localhost:3000/api/product-cards")
  const products = await res.json()
  return {
    props: {
      products,
    }
  }
}

export default Homepage
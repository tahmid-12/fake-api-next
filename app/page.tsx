import Searchbar from './components/searchbar/Searchbar'
import Sorting from './components/sorting/Sorting'
import Cards from './components/cards/Cards';
import { fetchProducts } from '@/utils'

export default async function Home() {

  const allProducts = await fetchProducts();

  console.log("products =>", allProducts);

  const isDataEmpty = !Array.isArray(allProducts) || allProducts.length < 1 || !allProducts;


  return (
    <div className='flex-col justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
      <div className='flex justify-between mt-12 w-full flex-between items-center flex-wrap gap-5'>
        <Searchbar />
        <Sorting />
      </div>
      {!isDataEmpty ? (
        <div className='flex flex-wrap gap-[10px] mt-12'>
          {allProducts?.map((products) => (
            <Cards products={products} />
          ))}
        </div>
      ) : (
        <div className='flex flex-wrap gap-[10px] mt-12'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
        </div>
      )
      }
    </div>
  )
}

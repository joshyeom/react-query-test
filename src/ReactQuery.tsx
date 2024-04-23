import { useQuery } from 'react-query'
import axios from 'axios'

export const ReactQuery = () => {
    const { isLoading, data, isError, error}: any = useQuery('get-product', () => {
        return axios.get(
          'http://localhost:8080/data',
        )
      })

  if (isLoading) return <>Loading...</>
  if (isError) return <h2>{error.message}</h2>

  return (
    <>
      <div className='text-4xl'>ReactQuery</div>
      <ul className='list-disc p-4'>
        {data &&
          data.items.map((product: any) => (
            <li key={product.id}>
              {product.name} / {product.price}
            </li>
          ))}
      </ul>
    </>
  )
}
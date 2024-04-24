import { useQuery } from 'react-query'
import axios from 'axios'

const fetchData = () => {
    return axios.get(
      'http://localhost:8080/data',
    )
}

export const ReactQuery = () => {

    const onSuccess = (data: any) => {
      console.log("데이터 가져오기 후 사이드 이펙트 수행", data)
    }

    const onError = (error: any) => {
      console.log("오류 발생 후 사이드 이펙트 수행", error)
    }

    const { isLoading, isFetching, data, isError, error, refetch}: any = useQuery(
      'get-product', fetchData,
        {
          enabled: false,
          onSuccess: onSuccess,
          onError: onError,
        }
    )

  if (isLoading) return <>Loading...</>
  if (isError) return <h2>{error.message}</h2>


  return (
    <>
      <button
        onClick={refetch}
        className="py-2 px-4 border bg-slate-100 rounded-md"
      >
        fetch data
      </button>
      <div className='text-4xl'>ReactQuery</div>
      <ul className='list-disc p-4'>
        {data &&
          data.data.items.map((product: any) => (
            <li key={product.id}>
              {product.name} / {product.price}
            </li>
          ))}
      </ul>
    </>
  )
}
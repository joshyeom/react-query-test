import { useState, useEffect } from 'react'
import axios from 'axios'

interface dataType{
  "page": number,
  "perpage": number,
  "totalitens": number,
  "totalrages": number,
  "items": itemsType[]
        
}

interface itemsType{
      "collectionId": string
      "collectionName": string
      "created": string
      "id": string
      "name":string
      "price": number,
      "updated": string
  ,
}

export const AxiosQuery = () => {
  const [data, setData] = useState<itemsType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('http://localhost:8080/data')
      .then((res: { data: dataType }) => {
        console.log(res)
        setData(res.data.items)
        setIsLoading(false)
      })
      .catch(e => {
        setError(e.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <>Loading...</>

  if (error) return <h2>{error}</h2>

  return (
    <>
      <div className='text-4xl'>AxiosQuery</div>
      <ul className='list-disc p-4'>
        {data &&
          data.map((product: itemsType) => (
            <li key={product.id}>
              {product.name} / {product.price}
            </li>
          ))}
      </ul>
    </>
  )
}
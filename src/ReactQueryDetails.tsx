import { useParams } from 'react-router-dom'
import { useProductId } from './hooks/useProductId.js'
import { ParallelQuery } from './ParallelQuery.tsx'

export const ReactQueryDetails = () => {
  const { productId } = useParams()
  const { isLoading, isError, error, data } = useProductId(productId)
  console.log(data)
  if (isLoading) return <>Loading...</>
  if (isError) return <>{error.message}</>

  return (
    <ParallelQuery/>
  )
}
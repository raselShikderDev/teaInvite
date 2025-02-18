
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link"

const ProdactDetails = async({params}:{params:{productId:string}}) => {
  const productId = params.productId
  // console.log(params);
  
    return (
    <div>
      <h1>Prodacts Number {`${productId}`}</h1>
    </div>
  )
}

export default ProdactDetails

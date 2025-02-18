import Link from "next/link"

const AllReviews = ({params}:{params:{productId:string}}) => {
  const {productId} = params
    return (
    <div>
      <h1 className="text-2xl font-bold pb-6">{`All reviews of product number ${productId}`}</h1>
      <hr />
      <Link href={"/"}>reviews Number 01</Link><br />
      <Link href={"/"}>reviews Number 02</Link><br />
      <Link href={"/"}>reviews Number 03</Link><br />
    </div>
  )
}

export default AllReviews

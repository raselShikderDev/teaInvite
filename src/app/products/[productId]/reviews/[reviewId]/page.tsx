
const ProductReview = ({params}:{params:{productId:string, reviewId:string}}) => {
    const {productId, reviewId} = params
  return (
    <div>
      {`Here is the review ${reviewId} of product number ${productId}`}
    </div>
  )
}

export default ProductReview

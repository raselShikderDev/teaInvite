import NotFoundReview from "@/app/products/[productId]/reviews/[reviewId]/not-found";

const FeatureAndConcept = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  if (slug.length === 2) {
    return <div>{`concept ${slug[1]} of feature number ${slug[0]}`}</div>;
  } else if(slug.length === 2){
    return <div>{`feature number ${slug[0]}`}</div>;
  } else{
    return <NotFoundReview/>
  }
};

export default FeatureAndConcept;

"use client";
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
    const handlingResove =()=>{
        reset()
        console.log("Trying to resolve the problem");
    }
    return (
   
    <div>
      <p>{error.message}</p>
      <button onClick={handlingResove}>Try again</button>
    </div>
  );
};

export default error;

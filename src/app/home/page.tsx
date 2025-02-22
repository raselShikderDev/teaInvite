
const Home = async() => {
  await new Promise( (resolve)=>{
    setTimeout(() => {
      resolve("Intentional Time out")
    }, 3000);
  })
  return (
    <div>
      Hello this is Home route of nextMastery
    </div>
  )
}

export default Home

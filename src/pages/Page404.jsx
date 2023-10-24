import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./page404.css"

function Page404() {
  return (
    <>
    <Navbar/>
      <div className='text-center text-success text-bold m-5 py-5'>
       <h2> Desolee le site est en maintenance et on vous prie de prendre patience et repasser a la prochaine</h2>
      </div>
      <Footer/>
    </>
  )
}

export default Page404

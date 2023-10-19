import "./home.css"
import Carousel from '../component/component1/Carousel'
import Body from '../component/component1/Body'
import Center from '../component/component1/Center'
import Flipcard from '../component/component1/Flipcard'

function Home() {
  return (
    <div className='delta1'>
      <Carousel/>
    <Body/>
    <Flipcard/>
    <Center/>
    </div>
  )
}

export default Home

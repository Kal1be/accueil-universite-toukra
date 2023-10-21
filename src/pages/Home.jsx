import "./home.css"
import Carousel from '../component/component1/Carousel'
import Body from '../component/component1/Body'
import Center from '../component/component1/Center'
import Flipcard from '../component/component1/Flipcard'
import { First } from "../component/component1/First"
import Secondone from '../component/component1/Secondone'
import Slide from "../component/component1/Slide"

function Home() {
  return (
    <div className='delta1'>
      <Carousel/>
    <Body/>
    <Flipcard/>
    <Center/>
    <Slide/>
    <Secondone/>
    <First/>
    </div>
  )
}

export default Home

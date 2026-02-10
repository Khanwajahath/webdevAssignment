 
import { Header } from './components/Header/header'
import './App.css'
import { About } from './components/About/about'
import { Products } from './components/products/products'
import { Home } from './components/home/home'
import { Dealer } from './components/certificates/dealer'
import { Services } from './components/services/service'
import { RequestQuote } from './components/getintouch/touch'
import { Footer } from './components/footer/footer'
export default function App() {
 
  return (
     <div className='flex-col'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Products></Products>
      <Dealer></Dealer>
      <Services></Services>
      <RequestQuote></RequestQuote>
      <Footer></Footer>
    </div>
  )
}
 

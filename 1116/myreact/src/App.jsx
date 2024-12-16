import $ from 'jquery'
import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//https://www.npmjs.com/package/aos
//套件AOS效果

function App() {
  useEffect(() => {
    AOS.init();//初始化
  }, [])

  return (
    <>
      <h1 data-aos='fade-right'>AOS-zoom-in</h1>

      <div className='box' data-aos='fade-up' data-aos-duration='1000'>

      </div>
    </>
  )
}
export default App
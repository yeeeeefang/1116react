import $ from 'jquery'
import './AppcarouselImg.css'
import { useEffect, useState } from 'react'

/* 實作react圖片輪播 */

function App() {

  const [carouselImg, setCarouselImg] = useState(0);

  const images = [
    "./src/HTML/images/image-1.jpg",
    "./src/HTML/images/image-2.jpg",
    "./src/HTML/images/image-3.jpg",
    "./src/HTML/images/image-4.jpg",
    "./src/HTML/images/image-5.jpg"
  ];

  /* 製作計時器 interval(間隔) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImg(carouselImg === images.length - 1 ? 0 : carouselImg + 1)
    }, 3000);
    
    /* 使用 clearInterval 函數，在組件卸載時停止計時器。 */
    return () => clearInterval(interval);
  }, [carouselImg]);



  return ( 
    <div id='content'>
      <img className='carousel' src={images[carouselImg]} alt="" />
    </div>
  )
}
export default App
import $ from 'jquery'
function App() {
  return (
    <div>
      <h2>jQuery</h2>
      <button onClick={()=>{
        console.log($('h2').text())
      }}>click</button> {/* 沒有加箭頭函式會立即執行  所以加()=>{}*/}
    </div>
  )
}
export default App
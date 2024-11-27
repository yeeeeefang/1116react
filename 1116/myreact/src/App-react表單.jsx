import { useState } from "react"

function App() {
  //使用者名稱
  const [inputUsername, setInputUserName] = useState('我是文字方塊')

  //縣市名
  const [selCity, setSelCity] = useState('');
  //建立陣列
  const arrCity = ['台北市', '桃園市', '台中市', '雲林縣', '高雄市', '台東縣'];

  //閱讀確認
  const [check, setCheck] = useState(false);

  //複選:多個核取方塊
  const [chkList, setChkList] = useState([]);
  const arrList = ['HTML', 'CSS', 'JS'];

  //建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    //檢查是否被勾選
    //是=>原本加新的
    if (e.target.checked) {
      //使用其餘運算值保留已經被勾選的項目+目前被勾選的項目
      setChkList([...chkList, e.target.value]);
    } else {
      //否=>從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value;
        })
      )

    }
  }

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input標籤 */}
      <label htmlFor="username">使用者名稱</label>
      <input type="text" id="username"
        value={inputUsername}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />{inputUsername}
      <br />
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        {/* 逐行寫法 */}
        {/* <option value="">--請選擇--</option>
        <option value="台北市">台北市</option>
        <option value="桃園市">桃園市</option>
        <option value="台中市">台中市</option>
        <option value="雲林縣">雲林縣</option>
        <option value="高雄市">高雄市</option>
        <option value="台東縣">台東縣</option> */}

        {/* 陣列寫法 */}
        <option value="" disabled>--請選擇--</option>{/* disbled無法使用 顯示灰字 */}
        {arrCity.map((city) => {
          return <option value={city} key={city}>{city}</option>
        })}

      </select>{selCity}
      <br />

      {/* 單一核取方塊 */}

      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          //處理勾選值的變化
          setCheck(e.target.checked);
        }} />
      {check}
      {/* {check.toString()} 可察看是T/F */}
      <label htmlFor="isCheck">閱讀確認</label>
      <br />


      {/* 複選:多個核取方塊 */}
      {/* 使用map要有key屬性 */}
      {arrList.map((list) => {
        return <div key={list}>
          <input type="checkbox" name="like" id={list}
          value={list} 
        
          onChange={handleChkList} />
          <label htmlFor={list}>{list}</label>
        </div>

      })}

      {/* <input type="checkbox" name="like" id="chkList1" value='HTML' onChange={handleChkList} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" name="like" id="chkList2" value='CSS' onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" name="like" id="chkList3" value='JS' onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label> */}
      <br />
      {chkList}

    </>
  )
}
export default App
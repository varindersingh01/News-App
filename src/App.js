import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import './App.css'
import Navbaar from './Components/header/navbaar';
import Technology from './Components/categories/technology';
import Sport from './Components/categories/sport';
import Business from './Components/categories/business';
import Country from './Components/categories/country';
import { useState } from 'react';

function App() {
  const [input,setInput]=useState('')
   const [value, setValue]=useState(null)
   const [search,setSearch]=useState(false)

   const Submit=(e)=>{
    e.preventDefault()
    setValue(input)
    setInput("")
    setSearch(true)
   }
  return (
    <div className="App bg-light">
      <Navbaar setInput={setInput} input={input} Submit={Submit} />
      <Routes>
        <Route path='/' element={<Country/>}></Route>
        <Route path='/technology' element={<Technology value={value} search={search} setSearch={setSearch}/>}></Route>
        <Route path='/sport' element={<Sport value={value} search={search} setSearch={setSearch}/>}></Route>
        <Route path='/business' element={<Business value={value} search={search} setSearch={setSearch}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

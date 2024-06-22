import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('')

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={count} />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setCount('')}/>
            
            <input
              type="button"
              value="DE"
              onClick={() => setCount(count.slice(0, -1))}
            />


            <input type="button" value="." onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="/" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="8" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
              
            <input type="button" value="9" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="*" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
          
            <input type="button" value="5" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="6" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="+" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="2" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="3" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="-" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="0" onClick={e =>{
              const target = e.target as HTMLInputElement;
              setCount(count + target.value)}}/>

            <input type="button" value="=" className='equal' onClick={() => setCount(eval(count))}/>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

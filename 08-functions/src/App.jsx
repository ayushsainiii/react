import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }

  function MouseEnter(){
    console.log('Mouse Entered');
  }

  function MouseLeave(){
    console.log('Mouse Leaved');
    
  }

  function inputChanging(val){
    console.log(val);
    
  }

  const PageScrolling = (elem) => {
    if(elem>0){
      console.log('Seedha Scrolling');
    }else{
      console.log('Ulta Scrolling');
      
    }
  }

  return (
    <div>
      <h1>Hello Guys, Ayush</h1>

      <button onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onClick={btnClicked}>Change User</button>
      <button onClick={function(){
        console.log('hello guys');
      }}>Explore this</button>


      <input onChange={
        function(elem){
          inputChanging(elem.target.value)
        }
      } type="text" placeholder='Enter Name' />

      <div onWheel={(elem)=>{
        PageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </div>
  )
}

export default App

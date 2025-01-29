import React,{useState} from 'react'
import Header from './Header'

function Textform(props) {
const [text,settext]=useState("Enter Name");


  const upclick = () =>{
// console.log("Uper case "+ text);
let newtrext=text.toUpperCase();
settext(newtrext);
  }
  const clickmee =(event)=>{
    // console.log('on click');
    settext(event.target.value)
  }
  return (
 <>
 <Header/>
 
 <div className='container my-5'><div className="form-floating">
 <h4>{props.heading}</h4>
  <textarea className="form-control" value={text} id="floatingTextarea2" onChange={clickmee} rows="80"></textarea>

  
</div>
<button className='btn btn-primary my-2' onClick={upclick}>Clicked</button>
</div>
 
 </>
  )
}

export default Textform
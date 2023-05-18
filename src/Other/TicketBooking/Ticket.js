import  {useState} from 'react';
import './TT.css';


function Ticket(){
    function submit(){
        const submit = alert("Your Ticket is Booked")
        
    }
    
    const[name,setName]= useState('')
    return(
        <>

        <div className='container-form'>
            <h1>Book your Tickits| Enjoy your day</h1>
           <label>
            name
           <input type="text" value={name} onChange ={(e) => 
              setName(e.target.value)
            }/>
            </label>
            <br/><br/>
           
            <button onClick={submit} type ="button">submit </button>
            <br/><br/>
            <button type='button' onClick={()=>{
                setName ('')
            }}>clear</button>
        
        </div>
          
</>

    )
}

export default Ticket

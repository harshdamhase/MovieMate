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
            

                <div class="form-floating mb-3">
               
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                   value={name} onChange ={(e) => 
                      setName(e.target.value)}/>
                  <label for="floatingInput">Email address</label>
                   
                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email"  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                     value={name} onChange ={(e) => 
                      setName(e.target.value)}/>  

                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
           
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

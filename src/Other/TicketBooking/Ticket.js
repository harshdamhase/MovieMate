import  {useState} from 'react';
import './TT.css';


function Ticket(){
    function submit(){
        const submit = alert("Your Ticket is Booked")
        
    }
    
    const[name,setName]= useState('')
    return(
        <>
    
    <div className='container'>
        <div className='container-form'>
            <h2>Book your Tickits| Enjoy your day</h2>
            

                <div className='form-floating form-box mt-4 mb-1 me-10'>
                  <input type="text" class="form-control" id="floatingInput" placeholder="FullName"
                   value={name} onChange ={(e) => setName(e.target.value)}/>
                    <label for="floatingInput">Enter Your Name</label>
                 </div>  
                     
                 <div className='form-floating mb-1 '>
                    <input type="email"  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                     value={name} onChange ={(e) => setName(e.target.value)}/> 
                      <label for="exampleFormControlInput1" class="form-label">Email Address</label> 

                </div>

                <div className='form-floating mb-1'>
                    <input type="date"  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                     value={name} onChange ={(e) =>setName(e.target.value)}/> 
                      <label for="exampleFormControlInput1" class="form-label">Select Time</label> 

                </div>
            
            <div className='location-box'>
            <span class="col-md-6 form-floating left">
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                  value={name} onChange ={(e) => setName(e.target.value)}/> 
                <label for="exampleFormControlInput1" class="form-label">Choose City</label>
            </span>

            <span class="col-md-3 right form-floating ">
                    <select class="form-select" id="" >
                    <option selected disabled value="">Location</option>
                    <option>cineplex</option>
                    </select>
            </span>
        </div>

        <div className='radio-sec'>

            <span className=''>Pyament Method:</span>

            <span class="form-check form-check-inline margin">
            <input class="form-check-input" type="radio" id="inlineCheckbox1" value="option1"></input>
             
            <label class="form-check-label" for="inlineCheckbox1">Paytm</label>
            </span>
            <span class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox2" 
            value={name} onChange ={(e) => setName(e.target.value)}/> 
            <label class="form-check-label" for="inlineCheckbox2">Googlepay</label>
            </span>
            <span class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox3" 
             value ={name} onChange ={(e) => setName(e.target.value)}/> 
            <label class="form-check-label" for="inlineCheckbox3">Phonepay</label>
            </span>
       </div>


        
    
       

    
                    
              
                
         
                    

            
           
           
        <div className='b-section '>
            <span class="col-auto left">
              <button onClick={submit} type="submit" className='btn btn-primary  mb-3' >Book your Ticket</button>
            </span>
        

             <span class="col-auto right">
                    <button className='btn btn-primary mb-3 ' onClick={()=>{
                            setName ('')
                        }} >Discard Booking</button>
            </span>
        </div>   

      </div>
      </div>     
        

          
</>

    )
}

export default Ticket

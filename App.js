 
import {useState} from 'react';

export default function App() {
    const [weight,assignWeight] = useState({});

   const calculateWeight = (e) =>{
          let actualWeight =  e.target.value;
          let mercuryWeight  = actualWeight * 2;
          let venusWeight  = actualWeight * 3;
        
            if(!actualWeight || actualWeight < 0 ){
              
                assignWeight({
                   "earthWeight" : 0,
                   "mercuryWeight" : 0,
                   "venusWeight" : 0
               })
                 return;
             }
       assignWeight({
           "earthWeight" : actualWeight,
           "mercuryWeight" : mercuryWeight,
           "venusWeight" : venusWeight
       })
          
        
  }//defined function here to calculate weight
  return (
        <>
              <h1>My Space</h1>

               <h5>Enter Your Name </h5>
                <input type = "text" />
                <h5>Enter Your Weight</h5>
               <input type = "number" onChange = {calculateWeight} />


             <div className = "planets">
                 
                    <div className = "round mercury">
                        <h5>{weight.mercuryWeight}</h5> 
                    </div>

                   <div className = "round venus">
                        <h5>{weight.venusWeight}</h5>
                   </div>

                  <div className = "round earth">
                      <h5>{weight.earthWeight}</h5>
                   </div>

                 
             </div>

            
         </>
      )

    
}

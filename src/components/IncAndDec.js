import './IncAndDec.css';
import { useState } from 'react';

function IncAndDec(props) {


   const [count, setCount] = useState(0);
   function incrementHandler() {
      console.log("clicked")
      setCount(count + 1);
   }
   function decrementHandler() {
      setCount(count - 1);
   }

   function resetHandler(){
      setCount(0)
   }
   return (
      <div className='bg-[#344151]  w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-8'>

         <h2 className='text-[#0398d4] text-2xl font-medium '>Increment && Decrement</h2>

         <div className='flex gap-4 bg-white w-[250px] p-2 justify-center'>

            <button onClick={decrementHandler} className='text-5xl font-bold w-16 text-center border-r-2 border-[#bfbfbf] '>-</button>
            <p className='  text-5xl font-bold w-16 text-center   '>{count}</p>

            <button onClick={incrementHandler} className=' text-5xl font-bold w-16 text-center  border-l-2 border-[#bfbfbf] '> +</button>
         </div>
          
         <div>
            <button onClick={resetHandler} className='bg-[#0398d4] text-white w-20 px-2 py-1 text-lg'   >
               Reset
            </button>
         </div>



      </div>
   )
}
export default IncAndDec;
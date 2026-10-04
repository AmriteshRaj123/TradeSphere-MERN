import React from 'react'

function Hero() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt="Home Hero" className='mb-5'></img>

            <h1 className='mt-5'> Already have a demat account?</h1>
            

            <p>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, learn more.</p>
             <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}} >SignUp Now</button>

        </div>

       </div>
     );
}

export default Hero;
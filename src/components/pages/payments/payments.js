import React, { useEffect } from 'react'

function Payments() {
    useEffect(()=>{
        const Script = document.createElement("script");
        const Form = document.getElementById('tedx-payment-button');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_Gpgp7rIT7HcdEC')
        Form.appendChild(Script);
        console.log("ajdkfkjWENL");
    },[])
    return (
        <div>
            <h1>Payments Page</h1>
            <h3>Instructions for the payment</h3>
                <p>Step1: complete the payment</p>
                <p>Step2: email verifiction followed by register</p>
                <p>Step3: Login</p>
            <form id="tedx-payment-button"></form>
        </div>
    )
}

export default Payments

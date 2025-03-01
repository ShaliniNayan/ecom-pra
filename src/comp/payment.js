import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const totalAmount = query.get('total'); // Get the total amount from the query parameters

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_V5I8bAVep9da24', // Your Razorpay Key ID
            amount: totalAmount * 100, // Amount in paise (e.g., 100 INR = 10000 paise)
            currency: 'INR', // Ensure the currency is set to INR
            name: 'Your Company Name',
            description: 'Payment Transaction',
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Customer Address',
            },
            theme: {
                color: '#F37254',
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    useEffect(() => {
        // Load the Razorpay checkout script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pay with Razorpay</h2>
            <button 
                onClick={handlePayment} 
                className="px-6 py-3 text-lg text-white bg-orange-500 rounded hover:bg-orange-600 transition duration-300"
            >
                Pay Now
            </button>
        </div>
    );
};

export default Payment;
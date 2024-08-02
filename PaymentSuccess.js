import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const PaymentSuccess = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Payment Successful</h2>
      <div className="text-center">
        <p>Your payment was completed successfully!</p>
        <a href="/" className="btn btn-primary">Go to Home</a>
      </div>
    </div>
  );
};

export default PaymentSuccess;

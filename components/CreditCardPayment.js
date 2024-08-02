import React from 'react';

const CreditCardPayment = () => {
  return (
    <div className="container mt-5">
      <h2>Credit Card Payment</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input type="text" className="form-control" id="cardNumber" required />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
          <input type="text" className="form-control" id="expiryDate" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cvv" required />
        </div>
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
};

export default CreditCardPayment;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const PaymentAndFeedback = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handlePaymentFormSubmit = (e) => {
    e.preventDefault();
    // Perform payment submission logic here (e.g., API call)
    // Show an alert for payment success
    alert('Payment Successful!');
    // Navigate to the feedback page after payment
    setPaymentSubmitted(true);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    // Show an alert thanking the user for their feedback
    alert('Thanks for your feedback!');
    // Optionally, you can reset the feedback or perform other actions
    setFeedback(''); // Reset the feedback input
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: 'url("https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/300365936_192653753118758_7926666929302338075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qrAyIM6RRvQQ7kNvgFz8W--&_nc_ht=scontent.fblr4-5.fna&oh=00_AYCRnRsjw2fqHKUk_D_RH4AfJbWWz3I3OQxWZZ2Az0_pnQ&oe=66A7BD96")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the whole viewport height
        padding: '2rem',
        color: '#fff' // Change text color for contrast against background
      }}
    >
      <h2 className="text-center mb-4">{paymentSubmitted ? 'Feedback' : 'Payment Options'}</h2>
      {!paymentSubmitted ? (
        <>
          <div className="row">
            {/* Credit/Debit Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://imgk.timesnownews.com/story/1569653930-Credit_Card.jpg"
                  className="card-img-top"
                  alt="Credit Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Credit/Debit Card</h5>
                  <p className="card-text">Pay securely with your credit or debit card.</p>
                  <button className="btn btn-primary" onClick={() => handlePaymentMethodClick('credit-card')}>Proceed</button>
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://c8.alamy.com/comp/2F7DYER/paypal-logo-2F7DYER.jpg"
                  className="card-img-top"
                  alt="PayPal"
                />
                <div className="card-body">
                  <h5 className="card-title">PayPal</h5>
                  <p className="card-text">Use PayPal for a secure and fast payment.</p>
                  <button className="btn btn-primary" onClick={() => handlePaymentMethodClick('paypal')}>Proceed</button>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAvugbDQtNnFhFJ3yTC0e7pNRaNTPgOH-HQ&s"
                  className="card-img-top"
                  alt="Bank Transfer"
                />
                <div className="card-body">
                  <h5 className="card-title">Bank Transfer</h5>
                  <p className="card-text">Transfer funds directly from your bank account.</p>
                  <button className="btn btn-primary" onClick={() => handlePaymentMethodClick('bank-transfer')}>Proceed</button>
                </div>
              </div>
            </div>
          </div>

          {selectedMethod && (
            <div className="mt-5">
              <h3 className="text-center mb-4">Enter Payment Details</h3>
              <form onSubmit={handlePaymentFormSubmit}>
                {selectedMethod === 'credit-card' && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input type="text" id="cardNumber" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <input type="text" id="expiryDate" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" className="form-control" required />
                    </div>
                  </div>
                )}

                {selectedMethod === 'paypal' && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="paypalEmail">PayPal Email</label>
                      <input type="email" id="paypalEmail" className="form-control" required />
                    </div>
                  </div>
                )}

                {selectedMethod === 'bank-transfer' && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="accountNumber">Account Number</label>
                      <input type="text" id="accountNumber" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="routingNumber">Routing Number</label>
                      <input type="text" id="routingNumber" className="form-control" required />
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary mt-3">Submit Payment</button>
              </form>
            </div>
          )}
        </>
      ) : (
        <div className="mt-5">
          <h3 className="text-center mb-4">Enter Your Feedback</h3>
          <form onSubmit={handleFeedbackFormSubmit}>
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                className="form-control"
                rows="4"
                value={feedback}
                onChange={handleFeedbackChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentAndFeedback;

import React from 'react';

const Feedback = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Feedback</h2>
      <p>Thank you for your payment! We value your feedback.</p>
      <form>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback</label>
          <textarea className="form-control" id="feedback" rows="4" placeholder="Enter your feedback here"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;

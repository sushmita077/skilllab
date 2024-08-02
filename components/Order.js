import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Order = () => {
  const { state } = useLocation();
  const [cart, setCart] = useState(state?.cart || {});
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotal = () => {
      const menuItems = {
        1: 30, 2: 20, 3: 20, 4: 20,
        5: 50, 6: 45, 7: 65, 8: 55,
        9: 30, 10: 35, 11: 40, 12: 35
      };

      let total = 0;
      for (const [id, quantity] of Object.entries(cart)) {
        total += (menuItems[id] || 0) * (parseInt(quantity) || 0);
      }
      setTotalAmount(total);
    };

    calculateTotal();
  }, [cart]);

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: 'url("https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/300365936_192653753118758_7926666929302338075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qrAyIM6RRvQQ7kNvgFz8W--&_nc_ht=scontent.fblr4-5.fna&oh=00_AYCRnRsjw2fqHKUk_D_RH4AfJbWWz3I3OQxWZZ2Az0_pnQ&oe=66A7BD96")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Make sure the background covers the whole viewport height
        padding: '2rem',
        color: '#fff' // Change text color for contrast against background
      }}
    >
      <h2 className="text-center">Order Summary</h2>
      <Row>
        {Object.entries(cart).map(([id, quantity]) => {
          if (quantity > 0) {
            const menuItems = {
              1: 'Veg Pakora', 2: 'Samosa', 3: 'Masal Puri', 4: 'Pani Puri',
              5: 'Chapathi', 6: 'Masala Rice', 7: 'Meals', 8: 'Veg Biryani',
              9: 'Orange Juice', 10: 'Apple Juice', 11: 'Mango Juice', 12: 'Pineapple Juice'
            };

            const prices = {
              1: 30, 2: 20, 3: 20, 4: 20,
              5: 50, 6: 45, 7: 65, 8: 55,
              9: 30, 10: 35, 11: 40, 12: 35
            };

            return (
              <Col md={4} key={id} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{menuItems[id]}</Card.Title>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Price: ₹{prices[id] * quantity}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
          return null;
        })}
      </Row>
      <div className="text-center mt-4">
        <h4>Total Amount: ₹{totalAmount}</h4>
        <Button variant="primary" onClick={handlePayment}>Proceed to Payment</Button>
      </div>
    </div>
  );
};

export default Order;

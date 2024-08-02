import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  // Sample menu items categorized into Snacks, Lunch, and Juice
  const menuItems = {
    snacks: [
      { id: 1, name: 'Veg Pakora', price: 30, imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2184851729/display_1500/stock-photo-mix-veg-pakora-with-tomato-mint-sauce-on-old-wooden-table-top-view-2184851729.jpg' },
      { id: 2, name: 'Samosa', price: 20, imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg' },
      { id: 3, name: 'Masal Puri', price: 20, imageUrl: 'https://cookingfromheart.com/wp-content/uploads/2019/09/Masala-Puri-Chaat-7.jpg' },
      { id: 4, name: 'Pani Puri', price: 20, imageUrl: 'https://thumbs.dreamstime.com/b/exploring-tangy-spicy-refreshing-delight-pani-puri-india-s-favourite-street-food-experience-selective-focus-327023924.jpg' },
    ],
    lunch: [
      { id: 5, name: 'Chapathi', price: 50, imageUrl: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/03/1Chapati-500x500.webp' },
      { id: 6, name: 'Masala Rice', price: 45, imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2023/05/Masala-Rice-2-3.jpg' },
      { id: 7, name: 'Meals', price: 65, imageUrl:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLPgO3fmP2EmNgy0jUZYoz8O0kaV9kvIFhg&s' },
      { id: 8, name: 'Veg Biryani', price: 55, imageUrl: 'https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC07512-1300x731.jpg?v=1699167800' }
    ],
    juice: [
      { id: 9, name: 'Orange Juice', price: 30, imageUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg' },
      { id: 10, name: 'Apple Juice', price: 35, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLAzYImdie4q3wpG7u8pCZpVlSby6mXPwVg&s'},
      { id: 11, name: 'Mango Juice', price: 40, imageUrl:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM19D4ys3BnojgW3K2bwW_UXPv6CGccEPcVw&s'},
      { id: 12, name: 'Pineapple Juice', price: 35, imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbx3Brdxk01_BK9zC8Yb2VtgryaxtPlbtAZg&s' }
    ]
  };

  const handleAddToCart = (id, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: quantity
    }));
  };

  const handleOrder = () => {
    navigate('/order', { state: { cart: cart } });
  };

  const containerStyle = {
    backgroundImage: 'url(https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/300365936_192653753118758_7926666929302338075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qrAyIM6RRvQQ7kNvgFz8W--&_nc_ht=scontent.fblr4-5.fna&oh=00_AYCRnRsjw2fqHKUk_D_RH4AfJbWWz3I3OQxWZZ2Az0_pnQ&oe=66A7BD96)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px'
  };

  const cardStyle = {
    backgroundColor: 'lightgreen',
    color: 'black',
    border: 'none'
  };

  const headingStyle = {
    color: 'white'
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2 className="text-center" style={headingStyle}>Menu</h2>
      
      {/* Snacks Section */}
      <h3 style={headingStyle}>Snacks</h3>
      <Row>
        {menuItems.snacks.map((item) => (
          <Col md={3} key={item.id} className="mb-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Form.Group controlId={`quantity-${item.id}`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Enter quantity"
                    onChange={(e) => handleAddToCart(item.id, e.target.value)}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Lunch Section */}
      <h3 className="mt-5" style={headingStyle}>Lunch</h3>
      <Row>
        {menuItems.lunch.map((item) => (
          <Col md={3} key={item.id} className="mb-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Form.Group controlId={`quantity-${item.id}`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Enter quantity"
                    onChange={(e) => handleAddToCart(item.id, e.target.value)}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Juice Section */}
      <h3 className="mt-5" style={headingStyle}>Juice</h3>
      <Row>
        {menuItems.juice.map((item) => (
          <Col md={3} key={item.id} className="mb-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Form.Group controlId={`quantity-${item.id}`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Enter quantity"
                    onChange={(e) => handleAddToCart(item.id, e.target.value)}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleOrder}>Proceed to Order</Button>
      </div>
    </div>
  );
};

export default Menu;

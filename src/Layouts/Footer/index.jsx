import React from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

function Footer(props) {
  return (
    <div class="footer">
      <Card class="hello" className="text-center">
        <Card.Header>Copyright 2021</Card.Header>
        <Card.Body>
          <Card.Title>React JS Bootstrap</Card.Title>
          <Card.Text>
            N'hésitez pas à nous contacter en cas de besoin
          </Card.Text>
          <Button variant="primary">Inscrivez-vous à notre newsletter</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
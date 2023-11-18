import { useState } from "react";




import {
  Card as Bcard,
  Button,
  Form,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
export const Card = (multplication: {
  firstFactor: Number;
  secondFactor: Number;
}) => {

 
  return (
    <>
      <Row>
        <Col>
          <Bcard >
            <Bcard.Img variant="top" src="https://picsum.photos/200/100" />
            <Bcard.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Bcard.Title>Card Title</Bcard.Title>
                  <Bcard.Text>
                    {multplication.firstFactor.toString()}
                  </Bcard.Text>
                  <Bcard.Text>X</Bcard.Text>
                  <Bcard.Text>
                    {multplication.secondFactor.toString()}
                  </Bcard.Text>
                  <Bcard.Text>=</Bcard.Text>
                  <Form.Control type="text" />
                  <Button>submit</Button>
                </Form.Group>
              </Form>
            </Bcard.Body>
          </Bcard>
        </Col>
      </Row>
    </>
  );
};

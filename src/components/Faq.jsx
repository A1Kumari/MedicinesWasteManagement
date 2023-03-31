import React from "react";
import { Container, Accordion, Card,} from "react-bootstrap";
function Faq() {
  return (
    <>
      <Container>
      <h2>FAQ</h2>
      <p>
        At Cure Ease, we are dedicated to making medications more accessible and
        affordable to people in need. We offer a wide range of prescription and
        over-the-counter medications, as well as medication counseling services
        to help ensure that our customers are taking their medications safely
        and effectively. We believe that everyone should have access to the
        medications they need to live healthy and fulfilling lives, and we are
        committed to providing high-quality products and exceptional customer
        service to help make that a reality.
      </p>
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What types of medication do you sell?</Accordion.Header>
            <Accordion.Body>
            We sell a variety of prescription and over-the-counter medications, including those for common conditions such as allergies, pain, and infections.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
            Do you require a prescription to purchase medication?
            </Accordion.Header>
            <Accordion.Body>
            Prescription medications require a valid prescription from a licensed healthcare provider. Over-the-counter medications can be purchased without a prescription.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            How long does it take to receive my order?
            </Accordion.Header>
            <Accordion.Body>
            Delivery times can vary depending on the shipping option selected and the destination. Standard shipping typically takes 3-7 business days, while expedited shipping can arrive within 1-2 business days.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            What is your return policy?
            </Accordion.Header>
            <Accordion.Body>
            We accept returns on most unopened and unused products within 30 days of purchase. Please see our full return policy for more information.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
            How can I contact customer service if I have a question or concern?
            </Accordion.Header>
            <Accordion.Body>
            Our customer service team can be reached by phone, email, or through our website's contact form. We strive to respond to all inquiries within 24 hours.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Faq;


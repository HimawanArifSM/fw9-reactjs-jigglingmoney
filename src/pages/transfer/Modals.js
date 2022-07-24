import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {Form} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='no-border2' closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='no-border2'>
      <Form className='no-border2 d-flex justify-content-center flex-row pin-input-wrapper gap-3'> {/** INI PENTING */}
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
      </Form>  {/** INI PENTING */}
      </Modal.Body>
      <Modal.Footer className='no-border2'>
        <Link to={'/failed'} className='btn btn-danger'>Cancel</Link>
        <Link to={'/success'} className='blue-button'>Continue</Link>
      </Modal.Footer>
    </Modal>
  );
}

function Modals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Continue
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Modals
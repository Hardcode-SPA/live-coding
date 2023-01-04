
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDev, setIsDev] = useState(false);


  function handleClose(evt) {
    if (evt.target.dataset.decision === 'true') {
      setIsDev(true);
    } else {
      setIsDev(false);
    }
    

    setShowModal(false);
  }

  function handleOpen() {
    setShowModal(true);
  }

  let alert = isDev ? <Alert variant='danger'>
                        Du wirst auf ewig im Bürostuhl hängen bleiben!
                      </Alert>
                      :
                      <Alert variant='success'>
                        Alles easy...
                      </Alert>;

  return (
    <div className="App">
      {alert}

      <Button variant="primary" onClick={handleOpen}>Show Bootstrap Modal</Button>



      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bist du bereit dein Leben am Schreibtisch zu verbringen?!!!1!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" data-decision={false} onClick={handleClose}>
            No
          </Button>
          <Button variant="success" data-decision={true} onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

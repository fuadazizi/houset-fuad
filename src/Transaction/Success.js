import React from 'react'
import { Modal } from 'bootstrap'

export default function Success(props) {
  return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Success
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Your order has been successfully placed.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Lanjut Desain</button>
            </Modal.Footer>
        </Modal>

    )
}

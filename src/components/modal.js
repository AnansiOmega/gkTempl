
import React, { useState } from 'react';
import { Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
 } from 'reactstrap';
 import DatePicker from 'reactstrap-date-picker'

 

export const FormModal = ({toggle, className, modal, buttonLabel}) => {
    const [value, setValue] = useState(new Date().toISOString())
    const [formattedValue, setFormattedValue] = useState('')
    const [time, setTime] = useState('10:00')

    const handleDatePick = (v,fv) => {
        setValue(v)
        setFormattedValue(fv)
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Book a Pooja or Homa</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Legal Name" />
      </FormGroup>
      <FormGroup>
        <Label>Phone Number</Label>
        <Input type="text" name="phone" placeholder="(123) - 123 - 1234" />
        </FormGroup>
        <FormGroup check>
        <Label check>
            <Input type='checkbox' />
            Can we leave a message?
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select a Nakshathra [Star]</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Ashwini</option>
          <option>Bharani</option>
          <option>Krithika</option>
          <option>Rohini</option>
          <option>Mrigashirsha</option>
          <option>Arudra</option>
          <option>Punarvasu</option>
          <option>Pushyami</option>
          <option>Ashlesha</option>
          <option>Makha</option>
          <option>Purva Phalguni</option>
          <option>Uttara Phalguni</option>
          <option>Hasta</option>
          <option>Chitra</option>
          <option>Swathi</option>
          <option>Vishaka</option>
          <option>Anuradha</option>
          <option>Jyeshta</option>
          <option>Moola</option>
          <option>Purvashada</option>
          <option>Uttarashada</option>
          <option>Sravana</option>
          <option>Dhanishta</option>
          <option>Shatabhisha</option>
          <option>Purvabhadra</option>
          <option>Uttarabhadra</option>
          <option>Revathi</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Date</Label>
        <DatePicker value={value} onChange={(v,f) => handleDatePick(v, f)} />
      </FormGroup>
      <FormGroup>
          <Label>Time</Label>
          <Input type='time' name='time' min="1:00" max="12:00"></Input>
      </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
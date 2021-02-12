import React, {useState} from 'react'
import { Header } from '../components/header'
import { Button } from 'reactstrap';
import { FormModal } from '../components/modal'
import { AdDiv } from '../components/adDiv'



export const Home = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
            <AdDiv/>
            <Header/>
            <Button onClick={() => setModal(!modal)} color="primary" size="lg" block>Book a Pooja or Homa</Button>
            <FormModal toggle={toggle} modal={modal}/>
            <div style={{height: '500px'}}></div>
        </div>
    )

}
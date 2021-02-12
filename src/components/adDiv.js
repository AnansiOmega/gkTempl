import React, { useState } from 'react'
import { Button, Row, Col } from 'reactstrap';

export const AdDiv = () => {
    const [adDisplay, setAdDisplay] = useState(true)

    let display = adDisplay ? 'block' : 'none'
    return(
        <div style={{ display }} className='hiring-ad'>
            <p>Many PRIESTS SPEAKING DIFFERENT LANGUAGES living
        in Washington DC or MD or VA needed by New SPECIAL MOBILE TEMPLE. Smartha Brahmana lineage.
        Knowledgeable in Naga Pooja / Homa. Excellent teacher of Veda Manthras. Exemplary character.
        We can communicate in Kannada and English and manageably in Hindi.
        Send CV w/ expected pay per service in your home and in devotee's home [post COVID-19].
            </p>
            <section>
                <Row>
                    <Col sm={{ size: 'auto' }}>
                        <p>Email us at: GKTempleGK@gmail.com</p>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 6 }}>
                        <span>
                            Stay Healthy. Thank You and Best Wishes.
                        </span>
                        <Button color='danger' onClick={() => setAdDisplay(false)}>X</Button>
                    </Col>
                </Row>
            </section>
        </div>
    )
}
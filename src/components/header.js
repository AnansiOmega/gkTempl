import { Jumbotron, Button, Row, Col } from 'reactstrap';
import Image from '../imgs/nagappa-pendant.jpg'
export const Header = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Welcome to The Ganga & Krishnamurthy Temple</h1>
        <p className="lead">We are here to help people solve their personal and social problems by applying spiritual values.</p>
        <hr className="my-2" />
        <container>
            <Row>
                <Col xs='1' sm='3'>
                    <img className='pendant' src={Image} alt='pendant'></img>
                </Col>
                <Col xs='2' sm='9'>
                    <div className='mission-statement'>
                    <h1>
                        The mission of Ganga and Krishnamurthy Temple is To:
                    </h1>
                    <ul>
                        Provide people the means for practicing Sanatana Dharma [Hinduism];
                    </ul>
                    <ul>
                        Promote the beliefs and values of Sanatana Dharma through various means and
                    </ul>
                    <ul>
                        Help people apply those values in life to solve problems. People of all faiths are welcome.
                    </ul>
                    </div>
                </Col>
            </Row>
        </container>
        <Button className='about-btn' color="primary">Learn More</Button>
      </Jumbotron>
    </div>
  );
};
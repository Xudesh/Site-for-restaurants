import React from "react";
import { Card, Image, Button, Row, Col, Container } from 'react-bootstrap'
import axios from "axios"
import "./styles/home.css"
import Slider from "../Content";


class Home extends React.Component{
    state = { details: [], }

    componentDidMount(){
      let data;
      axios.get("http://127.0.0.1:8000")
      .then(res => {
        data = res.data
        this.setState({
          details: data
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
    render() {
        return(
            <div>

                <Slider />
                <Container >
                    <Row>
                        <Card className="text-center bg-dark text-white my-5 py-2">
                        <Card.Body>PRO100 Restaurant Menu</Card.Body>
                        </Card>
                    </Row>
                </Container>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                            
                        <Container>
                            <Col className="card__item">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="food_image" variant="top" src={output.image} />
                                <Card.Body>
                                <Card.Title className="food_title">{output.title}</Card.Title>
                                <Card.Text className="food_text">
                                    {output.description}
                                </Card.Text>
                                <Card.Text className="food_price">
                                    ${output.price}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Container>   
                    
                    </div>
                ))}
                

            </div>
        )
    }
}

export default Home;
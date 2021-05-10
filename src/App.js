
import './App.css';
import NavBar from './component/NavBar';
import SideBar from './component/SideBar';
import Main from './component/Main';

import { Container, Row, Col,Card, Button, CardTitle, CardText } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container className="themed-container" fluid={true}>
            <Row>
                <Col md={2} >
                <SideBar></SideBar>
                </Col>
                <Col className="main-container">
                    <Main>
                      
                    </Main>
                </Col>
            </Row>
        </Container>
      
     
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';

const SideBar = () => {
    return ( 
       
                <ListGroup>
                    <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                

     );
}
 
export default SideBar;
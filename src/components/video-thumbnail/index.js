import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
class Thumbnail extends Component {
    render() {
        return (
            <div>
                <Col md={3} style={{textAlign:'center',paddingLeft:2.5,paddingRight:2.5}}>
                    <img style={{height:150}} src="http://via.placeholder.com/250x150" />
                    <br/>
                    <span>This is a sample movie title</span>
                </Col>
                
            </div>
        );
    }
}

export default Thumbnail;
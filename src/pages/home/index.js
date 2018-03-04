import React, { Component } from 'react';
import {
    Layout, Menu, Icon,
    Input,
    Button

} from 'antd';
import {Grid, Row, Col} from 'react-bootstrap';
import './Styles.css'
import Thumbnail from '../../components/video-thumbnail'

// const dotenv = require('dotenv');

// dotenv.config({path:'.env.development.local'});

const {Header, Sider, Content} = Layout;
const Search = Input.Search;


class Home extends Component {

    constructor(props) {
        super(props)
    }


    componentWillMount() {
        console.log(__dirname+'/.env.development.local')
        console.log('process',process.env);
    }


    render() {
        
        let videos = [1,2,3,4,5].map(x => {
            return <Thumbnail key={x} />
        });
        console.log('videos',videos);
            
        return (
            <Layout>
                <Sider style={{ background: '#fff' }} collapsible>
                    
                </Sider>
                <Content style={{background:'#fff'}}>
                    <Grid>
                        {/* Search Box */}
                        <Row>
                            <Col md={6}>
                                <Input placeholder="Search Videos" />
                            </Col>
                            <Col md={2}>
                                <Button type="default" icon="search">Search</Button>
                            </Col>
                        </Row>
                        {/* End of search box */}

                        <Row style={{marginTop:40}}>
                           {videos}
                        </Row>
                    </Grid>
                </Content>
            </Layout>
        );
    }
}

export default Home;    
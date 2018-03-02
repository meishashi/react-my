import React from 'react';
import { Row, Col } from 'antd';

export default class Mobile extends React.Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         current: 'toutiao'
    //     }
    // }
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}
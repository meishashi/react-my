import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { Row, Col } from 'antd';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
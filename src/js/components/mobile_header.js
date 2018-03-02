import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class MobileHeader extends React.Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         current: 'toutiao'
    //     }
    // }
    render() {
        return (
            <div id="mobile">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal  } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class PCHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'toutiao',
            visible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        };
    }
    setModalVisible(value){
        this.setState({ visible:value});
    }
    handleClick(e){
        if(e.key=="register"){
            // this.state = { current: 'register' };
            this.setState({ current: 'register' });
            this.setModalVisible(true);
        }else{
            this.setState({current:e.key})
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        var myfetchOptions = {
            method:'GET'
        };
        var formData = this.props.form.getFieldsValue();
        // console.log(formData);
        // fetch("").then(r=>r.json()).then(json=>{
        //     this.setState({userNickName:json.NickUserName,userid:json.userId});
        // });
        // this.setState({ userNickName: 'abc', userid: 1 });
        message.success('请求成功');
        this.setModalVisible(false)
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
    }
    render() {
        const { getFieldProps, getFieldsValue} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="logout">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </link>
                &nbsp;&nbsp;
                <Button type="danger" htmlType="button">退出</Button>
            </Menu.Item>
            : <Menu.Item key="register" className="register">
                <Button type="appstore" htmlType="button">注册/登录</Button>
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className='logo'>
                            <img src="./src/images/logo.png" alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                            onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="toutiao">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="mail" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="mail" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="mail" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="mail" />娱乐
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal
                            title="用户登录"
                            wrapClassName = "vertical-conter-modal"
                            visible = {this.state.visible}
                            onOk = {() => this.setModalVisible(false) }
                            okText = "关闭"
                            onCancel = {() => this.setModalVisible(false)}
                            cancelText = '取消'
                        >
                            <Tabs type="card">
                                <TabPane tab="注册" key="1">
                                    <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入你的账号" {...getFieldProps('r_userName')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input placeholder="请输入你的密码" {...getFieldProps('r_userPass')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input placeholder="请输入你的确认密码" {...getFieldProps('r_userPass2')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="登录" key="2">
                                    <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入你的账号" {...getFieldProps('r_userName')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input placeholder="请输入你的密码" {...getFieldProps('r_userPass')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}

export default PCHeader = Form.create({})(PCHeader);
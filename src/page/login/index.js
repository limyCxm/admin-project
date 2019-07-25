 import React, { PureComponent } from 'react';
 import { Form, Icon, Input, Button, Checkbox } from 'antd';
//  import posed from 'react-pose'

 import './index.less'

//  const Title = posed.p({
//     hidden: { opacity: 0,marginTop:-100 },
//     visible: { opacity: 1 ,marginTop:0},
//   });
 class Login extends PureComponent {
     constructor(props){
         super(props);
         this.state =  {
            isVisible:false
         }
     }

     componentDidMount(){
         this.setState({
             isVisible: true
         })
     }

     handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push({pathname:"/home"})
          }
        });
      };


     render(){

         const { getFieldDecorator } = this.props.form;
         return(
             <div className="login">
                 <div className="login_content">
                        <div className="login_bg"></div>
                        <div className="login_form">
                            <div className="form_submit">
                                <div className="name_forgetPassword">
                                    <div>LIMY</div>
                                    <div>忘记密码？</div>
                                </div>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        />,
                                    )}
                                    </Form.Item>
                                    <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        />,
                                    )}
                                    </Form.Item>
                                    <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>记住密码</Checkbox>)}
                                   <div className="login_btn">
                                   <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                   </div>
                            
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                 </div>
             </div>
         )
     }
 }


 export default Form.create()(Login);

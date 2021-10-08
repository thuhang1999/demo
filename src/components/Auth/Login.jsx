import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Api from "../../apis";
import UserStore from "../../stores/UserStore";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errMsg: "",
        }
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Đăng nhập</h3>

                        <div className="form-group" id="username">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control" placeholder="Nhập tên đăng nhập"
                                onChange={this.onChangeUsername}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu"
                                onChange={this.onChangePassword}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">&nbsp;Nhớ thiết bị</label>
                            </div>
                        </div>
                        <br></br>
                        {this.state.hasError && <p className="error-text">{this.state.errMsg}</p>}

                        <button onClick={this.onClickSubmit} className="btn btn-primary btn-block">Đăng nhập</button>
                        <p className="forgot-password text-right">
                            Chưa có tài khoản ? <a href="/sign-up">Đăng kí</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    onClickSubmit = (evt) => {
        evt.preventDefault();
        Api.login(this.username, this.password).then(res => {
            console.log("🚀 ~ file: Login.jsx ~ line 45 ~ Login ~ Api.login ~ res", res);
            let data = res?.data.data;
            if (data && data.login_result) {
                alert('Đăng nhập thành công');
                UserStore.setUser(data.user_info);
                this.props.history.push('/');
            } else {
                this.setState({
                    hasError: true,
                    errMsg: "Sai tên đăng nhập hoặc mật khẩu",
                })
            }
        })
    }

    onChangeUsername = (evt) => {
        this.username = evt.target.value;
    }

    onChangePassword = (evt) => {
        this.password = evt.target.value;
    }
}

export default withRouter(Login);
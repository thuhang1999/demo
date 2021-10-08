import React, { Component } from "react";
import Api from "../../apis";

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Đăng ký</h3>

                        <div className="form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control" placeholder="Tên đăng nhập"
                                onChange={this.onChangeUsername}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                                onChange={this.onChangeEmail}
                            />
                        </div>

                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập họ và tên"
                                onChange={this.onChangeName}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu"
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <br></br>
                        <button onClick={this.onSubmit} className="btn btn-primary btn-block">Đăng ký</button>
                        <p className="forgot-password text-right">
                            Đã có tài khoản ? <a href="/login">Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    onChangeUsername = (evt) => {
        this.username = evt.target.value;
    }

    onChangeEmail = (evt) => {
        this.email = evt.target.value;
    }

    onChangeName = (evt) => {
        this.name = evt.target.value;
    }

    onChangePassword = (evt) => {
        this.password = evt.target.value;
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        Api.signUp(this.username, this.password, this.email, this.name).then(res => {
            console.log("🚀 ~ file: SignUp.jsx ~ line 69 ~ SignUp ~ Api.signUp ~ res", res)
            let data = res?.data;
            if (data && data.result) {
                alert('Đăng ký thành công');
                this.props.history.push('/login');
            } else {
                alert("Có lỗi xảy ra. Vui lòng thử lại");
            }
        })
    }
}
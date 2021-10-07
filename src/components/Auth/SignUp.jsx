import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Đăng ký</h3>

                        <div className="form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control" placeholder="Tên đăng nhập" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập họ và tên" />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block">Đăng ký</button>
                        <p className="forgot-password text-right">
                            Đã có tài khoản ? <a href="/login">Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
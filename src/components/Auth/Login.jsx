import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Đăng nhập</h3>

                        <div className="form-group">
                            <label>Tên đăng nhập</label>
                            <input type="email" className="form-control" placeholder="Nhập tên đăng nhập" />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">&nbsp;Nhớ thiết bị</label>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                        <p className="forgot-password text-right">
                             <a href="#">Quên mật khẩu?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
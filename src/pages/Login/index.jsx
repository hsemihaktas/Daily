import React, { Component } from 'react';

import '../../styles/main.css';

import Inpt from '../../components/Input';
import Labl from '../../components/Label';
import SubmitButton from '../../components/Button/SubmitButton';
import data from '../../data.json';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
    this.submitValue = this.submitValue.bind(this);
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      [id]: value,
      [`${id}Error`]: '',
    });
  };

  maybeValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }
  maybeValidPassword(password) {
    const splittedPassword = password.split('');
    return splittedPassword.length > 7 ? true : false;
  }

  submitValue() {
    const isEmailValid = this.maybeValidEmail(this.state.email);
    const isPasswordValid = this.maybeValidPassword(this.state.password);

    if (!isEmailValid || !isPasswordValid || !this.state.email || !this.state.password) {
      return this.setState({
        emailError:
          (!this.state.email && 'Email alanı boş geçilemez') || (!isEmailValid && 'Geçerli bir email adresi giriniz'),
        passwordError:
          (!this.state.password && 'Password alanı boş geçilemez') ||
          (!isPasswordValid && 'Şifreniz en az 8 karakter olmalıdır'),
      });
    }

    const { user } = data;

    const filteredUser = user.filter((item, index) => {
      return item.email === this.state.email && item.password === this.state.password;
    });
    if (filteredUser.length > 0) {
      return window.location.replace('/answers');
    } else {
      return alert('Kullanıcı adı veya şifre hatalı');
    }

    /* USER INDEX
    const userIndex = user.findIndex((item) => {
      return item.email === this.state.email && item.password === this.state.password;
    });
    if (userIndex > -1) {
      return window.location.replace('/answers');
    }
    return alert('Kullanıcı adı veya şifre hatalı');*/

    /* USER FIND
    const userFind = user.find((item) => {
      return item.email === this.state.email && item.password === this.state.password;
    });
    if (userFind) {
      return window.location.replace('/answers');
    }
    return alert('Kullanıcı adı veya şifre hatalı');*/
  }

  render() {
    return (
      <div className="container form flex">
        <br></br>
        <Labl id={data.id} text={'E-mail'}></Labl>
        <Inpt
          type="text"
          placeholder="E-mail Giriniz"
          id="email"
          onchange={this.onChange.bind(this)}
          error={this.state.emailError}
        />
        <Labl id={data.id} text={'PASSWORD'}></Labl>
        <Inpt
          type="password"
          placeholder="Şifrenizi Giriniz"
          id="password"
          onchange={this.onChange.bind(this)}
          error={this.state.passwordError}
        />
        <SubmitButton sbmtValue={this.submitValue} />
        <br></br>
      </div>
    );
  }
}

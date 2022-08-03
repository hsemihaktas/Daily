import React, { Component } from 'react';

import Label from '../../components/Label';
import Input from '../../components/Input';
import SubmitButton from '../../components/Button/SubmitButton';

import '../../styles/main.css';

import data from '../../data.json';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
      error: [],
    };
  }

  onChange = (event) => {
    const { id, value } = event.target;
    const error = [...this.state.error];

    const clonedQuestions = this.state.questions.map((question) => {
      if (question.id === Number(id)) {
        question.answer = value;
        const errorIndex = error.indexOf(question.id);
        if (errorIndex > -1) {
          error.splice(errorIndex, 1);
        }
      }
      return question;
    });
    this.setState({ questions: clonedQuestions, error });
  };

  submitValue = () => {
    const { questions } = this.state;
    const error = [];
    questions.map((question) => {
      if (!question.answer) {
        error.push(question.id);
      }
      return question;
    });

    if (error.length > 0) {
      return this.setState({ error });
    } else {
      console.log(questions);
      return alert('Form gönderildi.');
    }
  };

  render() {
    return (
      <div className="container form flex">
        <br></br>
        <ul>
          {this.state.questions.map((data) => (
            <div key={data.id}>
              <Label id={data.id} text={data.question}></Label>
              <Input
                type="text"
                placeholder={data.id + '. Sorunun Cevabı'}
                id={data.id}
                onchange={this.onChange.bind(this)}
                error={this.state.error.includes(data.id) && 'Cevap boş geçilemez'}
              ></Input>
            </div>
          ))}
        </ul>
        <SubmitButton submitValue={this.submitValue} />
        <br></br>
      </div>
    );
  }
}

export default index;

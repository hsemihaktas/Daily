import React, { Component } from 'react';
import data from '../../data.json';
import '../../styles/main.css';
import Labl from '../../components/Label';
import Inpt from '../../components/Input';
import SubmitButton from '../../components/Button/SubmitButton';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
      error: [],
    };
  }

  onChange = (event) => {
    const value = event.target.value;
    const id = Number(event.target.id);
    const sorular = [...this.state.questions];
    const error = [...this.state.error];

    const questions = sorular.map((question) => {
      if (question.id === id) {
        question.answer = value;
        const errorIndex = error.indexOf(question.id);
        if (errorIndex > -1) {
          error.splice(errorIndex, 1);
        }
      }
      return question;
    });
    this.setState({ questions, error });
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
              <Labl id={data.id} text={data.question}></Labl>
              <Inpt
                type="text"
                placeholder={data.id + '. Sorunun Cevabı'}
                id={data.id}
                onchange={this.onChange.bind(this)}
                error={this.state.error.includes(data.id) && 'Cevap boş geçilemez'}
              ></Inpt>
            </div>
          ))}
        </ul>
        <SubmitButton sbmtValue={this.submitValue} />
        <br></br>
      </div>
    );
  }
}

export default index;

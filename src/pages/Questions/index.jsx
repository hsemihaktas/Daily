import React, { Component } from 'react';

import Inpt from '../../components/Input';
import SubmitButton from '../../components/Button/SubmitButton';
import DeleteButton from '../../components/Button/DeleteButton';
import AddButton from '../../components/Button/AddButton';

import '../../styles/main.css';

import data from '../../data.json';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
    };
    this.addValue = this.addValue.bind(this);
  }

  onChange = (event) => {
    const value = event.target.value;
    const id = Number(event.target.id);
    const clonedQuestions = this.state.questions.map((question) => {
      if (question.id === id) {
        question.question = value;
      }
      return question;
    });
    this.setState({ questions: clonedQuestions });
  };

  addValue() {
    const questions = [...this.state.questions];

    questions.push({ id: Date.now() + 1, question: '', answer: '' });

    this.setState({ questions });
  }

  deleteValue = (id) => {
    const newId = Number(id);
    const questions = [...this.state.questions];
    const newQuestions = questions.filter((question) => question.id !== newId);
    this.setState({ questions: newQuestions });
    console.log(questions);
  };

  submitValue = () => {
    console.log(this.state.questions);
  };

  render() {
    return (
      <div className="container form">
        <div className="right">
          <AddButton addvalue={this.addValue} />
        </div>
        <ul className="form flex">
          {this.state.questions.map((data) => (
            <div key={data.id}>
              <Inpt type="text" placeholder={data.question} id={data.id} onchange={this.onChange.bind(this)} />
              <DeleteButton id={data.id} deletevalue={this.deleteValue} />
            </div>
          ))}
          <SubmitButton submitValue={this.submitValue} />
        </ul>
        <br></br>
      </div>
    );
  }
}

export default index;

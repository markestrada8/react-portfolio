import React, { Component } from 'react';
import axios from 'axios';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

      return formData;
  }

  handleSubmit(event) {
    axios.post("https://markestrada.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), {withCredentials: true})
    .then(response => {
      this.props.handleSuccessfulFormSubmission(response.data)
    }).catch(error => {
      console.log("error= ", error)
    })
    this.props.handleSuccessfulFormSubmission(this.state);
    event.preventDefault();
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="blog-form-container">
        <form className="blog-form" onSubmit={this.handleSubmit}>
          <h2>{this.state.title}</h2>
          <h2>{this.state.blog_status}</h2>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Blog Title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="blog_status"
            value={this.state.blog_status}
            placeholder="Blog Status"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.props.handleChange}>Submit</button>
        </form>
      </div>
    )
  }
}

import React, { Component } from "react";
import RichTextEditor from "../forms/rich-text-editor";
import DropzoneComponent from "react-dropzone-component";

import axios from "axios";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
      content: "",
      featured_image: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRichTextEditorChange =
      this.handleRichTextEditorChange.bind(this);

    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);

    this.featuredImageRef = React.createRef();
  }

  handleFeaturedImageDrop() {
    return {
      addedfile: (file) => this.setState({ featured_image: file }),
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  handleRichTextEditorChange(content) {
    this.setState({
      content: content,
    });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

    if (this.state.featured_image) {
      formData.append(
        "portfolio_blog[featured_image]",
        this.state.featured_image
      );
    }

    return formData;
  }

  handleSubmit(event) {
    axios
      .post(
        "https://markestrada.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        if (this.state.feature_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }
        this.setState({
          title: "",
          blog_status: "",
          content: "",
          featured_image: "",
        });

        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
      })
      .catch((error) => {
        console.log("handleSubmit for blog error: ", error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="blog-form-container" onSubmit={this.handleSubmit}>
        <div className="two-column">
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Blog Title"
            onChange={this.handleChange}
          />
          <select
            style={{ border: "1px solid lightgray" }}
            type="select"
            name="blog_status"
            value={this.state.blog_status}
            placeholder="Blog Status"
            onChange={this.handleChange}
          >
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>
        <div className="one-column">
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
          />
        </div>

        <div className="image-uploaders">
          <DropzoneComponent
            // ref={this.featuredImageRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleFeaturedImageDrop()}
          >
            <div className="dz-message">Drag & Drop Image (optional)</div>
          </DropzoneComponent>
        </div>

        <button className="btn" type="submit" onClick={this.props.handleChange}>
          Submit
        </button>
      </form>
    );
  }
}

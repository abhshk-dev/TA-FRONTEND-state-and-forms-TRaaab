import React from "react";

class MultiForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      username: "",
      date: "",
      readonly: "This can only be copied",
    };
  }
  handleChange = ({ target }) => {
    let { name, value } = target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.fileInput.current.files[0].name);
  };
  render() {
    return (
      <>
        <form className="flex" onSubmit={this.handleSubmit}>
          <h1>User MultiForm</h1>
          <label htmlFor="user">UserName</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Enter Name"
          />
          <label htmlFor="date">Date Input</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <label htmlFor="fileInput">File Input</label>
          <input type="file" ref={this.fileInput} />

          <label htmlFor="ReadInput">Read-Only</label>
          <input type="text" value={this.state.readonly} readOnly />

          <label htmlFor="DisabledInput">Disabled Input </label>
          <input type="text" disabled />

          <label htmlFor="TextArea">TextArea</label>
          <textarea type="textarea" rows="5" cols="5" />

          <label htmlFor="DisabledTextArea">TextArea</label>
          <textarea type="textarea" rows="5" cols="5" disabled />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default MultiForm;

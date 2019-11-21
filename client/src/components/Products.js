import React from 'react';

function Product(param) {
  return (
    <div className="product">
      <h1>{param.notice.title}</h1>
      <p>{param.notice.content}</p>
    </div>
  );
}

export function Products(props) {
  if (props.loading) {
    return (
      <div className="products">
        <p>Loading...</p>
      </div>
    );
  }
  return (<div className="products">
    {props.products.map(notice => <Product key={notice.id} notice={notice} />)}
    </div>
  );
}

export class ProductCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    console.log("Submit Pressed!");
    this.props.onCreate({
      title: this.state.title,
      content: this.state.content,
    });

    this.setState({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="new-product">
        <input className="title" type="text" placeholder="Product name" value={this.state.title} onChange={this.handleTitleChange} />
        <textarea className="content" placeholder="Enter your product description here..." value={this.state.content} onChange={this.handleContentChange}></textarea>
        <button onClick={this.handleSubmit}>Post Product</button>
      </div>
    );
  }
}

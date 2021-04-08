import React from "react";
import "./App.css";
import {Products, ProductCreator} from "./components/Products.js";
import {Products as ProductsModel} from "./models/Products.js";
import {ErrorMessage} from "./components/ErrorMessage.js";

class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      productsLoading: true,
      products: [],
      numCharactersSubmitted: 0,
      errorMessage: "",
    };

    this.productsModel = new ProductsModel();

    this.update();
    this.handleProductCreated = this.handleProductCreated.bind(this)
  }

  update() {
    this.productsModel.getProducts().then(products => {
      console.log(JSON.stringify(products));
      this.setState({
        productsLoading: false,
        products: products,
        errorMessage: ""
      });
    }).catch(err => {
      this.setState({
        errorMessage: err.message,
        productsLoading: false
      });
    });

  }

  handleProductCreated(notice) {
    this.productsModel.createProduct(notice.title, notice.content).then(id => {
      this.update();
    }).catch(err => {
      this.setState({
        errorMessage: err.message,
      });
    });
  }

  render() {
    return (
      <div className="products-app">
        <h1>Humanitec Sample App</h1>
        <h2>My Task list</h2>
        <ProductCreator onCreate={this.handleProductCreated} />
        <Products products={this.state.products} loading={this.state.productsLoading} />
        <ErrorMessage message={this.state.errorMessage} />
      </div>
    );
  }
}

export default App;

import React from "react";

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zipcode: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zipcode: "",
        city: "",
        country: "",
      },
      isSame: false,
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    // console.log(this.state.shipping[name]);
    this.setState({
      shipping: { ...this.state.shipping, [name]: value },
      //   billing: { ...this.state.billing, [name]: value },
    });
  };

  handleCheckbox = () => {
    this.setState({ isSame: !this.state.isSame });
  };
  render() {
    const billingData = this.state.isSame
      ? this.state.shipping
      : this.state.billing;
    return (
      <>
        <h1 className="header">Checkout Page</h1>
        <div className="container flex">
          <form className="flex-45">
            <h1>Shipping Address</h1>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="e.g. D-302,Tharwani Heritage..."
              value={this.state.shipping.address}
              onChange={this.handleChange}
            />
            <label htmlFor="zipcode">ZipCode/PostalCode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="e.g.410210"
              value={this.state.shipping.zipcode}
              onChange={this.handleChange}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Navi Mumbai"
              value={this.state.shipping.city}
              // onChange=""
              onChange={this.handleChange}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="e.g. India"
              value={this.state.shipping.country}
              // onChange=""
              onChange={this.handleChange}
            />
          </form>

          {/* Billing Address Form*/}

          <form className="flex-45 ">
            <h1>Billing Address</h1>
            <div className="flex">
              <input type="checkbox" onChange={this.handleCheckbox} />
              <span>Same </span>
            </div>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="e.g. D-302,Tharwani Heritage..."
              value={billingData.address}
              onChange={this.handleChange}
            />
            <label htmlFor="zipcode">ZipCode/PostalCode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="e.g.410210"
              value={billingData.zipcode}
              onChange={this.handleChange}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Navi Mumbai"
              value={billingData.city}
              onChange={this.handleChange}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="e.g. India"
              value={billingData.country}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Master;

import { Card } from "react-bootstrap";
import React from "react";
import axios from "axios";

class Cards extends React.Component {
  state = {
    type: "",
    activity: "",
    participants: "",
    price: "",
    loading: false,
  };

  componentDidMount = async () => {
    let apiUrl = "https://www.boredapi.com/api/activity";
    if (this.props.match.params.type !== undefined) {
      apiUrl = `https://www.boredapi.com/api/activity?type=${this.props.match.params.type}`;
    }
    this.setState({ loading: true });

    if (this.props.match.params.participants !== undefined) {
      apiUrl = `https://www.boredapi.com/api/activity?participants=${this.props.match.params.participants}`;
    }
    this.setState({ loading: true });

    if (this.props.match.params.price !== undefined) {
      const price = ["free", "$", "$$", "$$$", "$$$$", "$$$$$"];
      const priceNumber = [[0], [0.1, 0.2], [0.3, 0.4], [0.5], [0.6], [0.8]];
      const index = price.indexOf(this.props.match.params.price);
      let innerIndex = 0;
      if (index === 1 && index === 2) {
        innerIndex = Math.floor(Math.random() * 2);
      }
      apiUrl = `https://www.boredapi.com/api/activity?price=${priceNumber[index][innerIndex]}`;
    }
    this.setState({ loading: true });
    try {
      const response = await axios.get(apiUrl);
      this.setState({ ...response.data, loading: false });
    } catch (err) {}
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>{this.state.type}</Card.Header>
          <Card.Body>
            <Card.Title>
              {this.state.activity ? this.state.activity.toLowerCase() : ""}
            </Card.Title>
            <Card.Text>
              <span>number of participants: {this.state.participants}</span>
              <span>
                price:{" "}
                {this.state.price === 0
                  ? "free"
                  : (this.state.price === 0.1) | (this.state.price === 0.2)
                  ? "$"
                  : (this.state.price === 0.3) | (this.state.price === 0.4)
                  ? "$$"
                  : this.state.price === 0.5
                  ? "$$$"
                  : this.state.price === 0.6
                  ? "$$$$"
                  : this.state.price === 0.8
                  ? "$$$$$"
                  : "$"}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}
export default Cards;

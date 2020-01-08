import React, { Component } from "react";
import "../style.css";
export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://www.placekitten.com/500/500",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[randomIndex].url;

    this.setState({
      randomImg: randomMemeImg
    });
  }
  render() {
    return (
      <main>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button  onClick={this.handleSubmit}>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="randommemeimages" className="random-images"/>
          <div className="top">{this.state.topText}</div>
          <div className="bottom">{this.state.bottomText}</div>
        </div>
      </main>
    );
  }
}

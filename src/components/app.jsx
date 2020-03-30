import React from "react";

import "../stylesheet/style.scss";
import generatColorPair from "../util/utilfunctions.js";
import copy from "copy-to-clipboard";

class ThemeUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: "#19072B",
      textColor: "#7BF7D1",
      history : ['#19072B' , '#7BF7D1']
    };
  } 
  changeColor() {
    let colors = generatColorPair();
    let history = [this.state.backGroundColor , this.state.textColor];
    this.setState({ backGroundColor: colors[0], textColor: colors[1] , history:history});
  }

  swipeColor(color1 , color2){
    this.setState({ backGroundColor: color2, textColor: color1 });
  }
 
 previousColorPair(){
    this.setState({backGroundColor:this.state.history[0] ,
        textColor : this.state.history[1]
    });
  }

  // copy to clipboard
  clipboard(colorCode){
    copy(colorCode);
  }

  render() {
    document.documentElement.style.setProperty(
      "--background-color",
      this.state.backGroundColor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      this.state.textColor
    );

    return (
      <div>
        <header className="container header_flex">
          <a href="#">
            <h1 className="logo">Logo</h1>
          </a>
          <nav className="nav_bar">
            <a href="#">About me</a>
            <a href="#">Article</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        
        <main className="container about_section">
        <a href="#" className="nav_buttons">
              <span onClick={() => this.previousColorPair()} className="next_icon action_button">
              ◄ pre
              </span>{" "}
              <span onClick={() => this.swipeColor(this.state.backGroundColor , this.state.textColor )} className="next_icon action_button">
              &#9680;
              </span>{" "}
              <span onClick={() => this.changeColor()} className="next_icon action_button">
              next ► 
              </span>{" "}     
           </a>
          <h2 className="about_me_header">About me</h2>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus illum voluptatem in dolorum, tempora odit! Odit in ut
              consequuntur quasi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              molestiae magni corporis reiciendis, repellat ipsum ipsam velit
              eius, incidunt optio nesciunt nobis natus provident id officia
              doloribus tempora porro vitae eveniet exercitationem aut omnis sit
              fugiat perferendis! Perspiciatis, ducimus perferendis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolor, commodi earum vitae iste tempora odit. Ullam maiores a
              sequi itaque cum omnis porro, iste repellendus laudantium ex nemo
              molestiae possimus doloribus suscipit unde voluptatem consequuntur
              ad non voluptate voluptatibus saepe dignissimos veritatis
              quisquam! Modi nihil architecto necessitatibus asperiores quam
              dolore vero perferendis distinctio vel tempore facere eaque culpa
              consequuntur perspiciatis, esse quos cum vitae voluptates.
              Temporibus quaerat explicabo laudantium quibusdam ut deleniti
              animi ipsam voluptatum sunt eum, fuga officia eos necessitatibus
              incidunt commodi facere consequatur delectus quasi ex iste atque
              libero! Distinctio cupiditate vitae incidunt! Vero, laboriosam
              dicta! Harum!
            </p>
            <button  onClick={()=>this.clipboard(this.state.backGroundColor)} className="btn bgc_color_btn">
              {this.state.backGroundColor}
              <span>&#128203;</span>
            </button>
            <button  onClick={()=>this.clipboard(this.state.textColor)} className="btn text_color_btn">
              {this.state.textColor}
              <span>&#128203;</span>
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default ThemeUI;

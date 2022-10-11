import { Component, Fragment } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: { qstion: "", message: "" },
      Allchat: [],
      input: "",
    };
    this.questions = ["hello ", "how are you ?", "what is your name ?","good luck 🤗",];
    this.reponses = ["hi 🙋‍♀️", "i am fine, what about you?", "my name is touria","thank you 🥰"];
  }

  handlecatch = (e) => {
    this.setState({ input: e.target.value });
  };

  handlechating = (e) => {
    e.preventDefault();
    let { input, chat, Allchat } = this.state;
    chat.qstion = input;
    console.log(chat);
    for (let i = 0; i < this.questions.length; i++) {
      const Oneqstion = this.questions[i];
      if (Oneqstion.match(input)) {
        chat.message = this.reponses[i];
        break;
      } else {
        chat.message = "Sorry Can't Undrastand You !";
      }
    }
    setTimeout(()=>{
      this.setState({chat:{message:chat.message}})
    },5000)
    Allchat.push(chat);
    this.setState({ input: "", chat:{message:chat.message}, Allchat: Allchat });

    //     this.questions.forEach((question, index)=>{
    //        if ( question == this.state.input ) {
    //     ;
    //     this.setState({
    //         message : this.reponses[index],
    //          qstion: this.state.input });

    //   }

    //   })
    //   this.setState({input:""})
  };

  render() {
    let { Allchat: Allchat } = this.state;
    return (
      <>

   
        <form className="form" onSubmit={this.handlechating}>
          <div className="chating">
      <div className="online">
        <h2>Touria Bk</h2>
        <h5>  online<div></div></h5>
      </div>

        <div className="CHAT">
{Allchat.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="qst">{item.qstion} </div>
                  <div className="Rep">{item.message}</div>
                </Fragment>
              );
            })}




          </div>
          <div className="Mssg">
            <input
              type="text"
              value={this.state.input}
              onChange={this.handlecatch}
            />
            <button type="submit">
             Envoyer <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            </button>
          </div>
          </div>
        </form>
      </>
    );
  }
}

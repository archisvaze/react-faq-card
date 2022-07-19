import { useState } from "react";
import arrow from "../images/icon-arrow-down.svg"

function Item(props) {

    let question = props.obj.q;
    let answer = props.obj.a;

    let [answerVisible, setAnswerVisible] = useState(false)

    function handleClick() {
        setAnswerVisible(!answerVisible)
    }
    return (
        < div className="item" >
            <div onClick={() => handleClick()} className="question-container">
                <div style={{ fontWeight: answerVisible ? "700" : "400" }} className="question">{question}</div>
                <img style={{ transform: answerVisible ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="" className="arrow" />
            </div>
            <div style={{ display: answerVisible ? "flex" : "none" }} className="answer">{answer}</div>
            <hr />
        </div >
    )
}


export default Item;
import Item from "./Item";
import mobile_img from "../images/illustration-woman-online-mobile.svg"
import mobile_shadow from "../images/bg-pattern-mobile.svg"



function App(props) {
    let faqs = [{
        key: 0,
        q: "How many team members can I invite?",
        a: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
        key: 1,
        q: "What is the maximum file upload size?",
        a: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        key: 2,
        q: "How do I reset my password?",
        a: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
        key: 3,
        q: "Can I cancel my subscription?",
        a: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        key: 4,
        q: "Do you provide additional support?",
        a: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }]


    return (
        <div className="card">
            <div className="image-container">
                <img className="img" src={mobile_img} alt="" />
                <img className="img-shadow" src={mobile_shadow} alt="" />
            </div>

            <div className="text-container">

                <h1 className="heading">FAQ</h1>

                {faqs.map(obj => {
                    return (
                        <Item key={obj.key} obj={obj} />
                    )
                })}

            </div>


        </div>
    )
}

export default App;
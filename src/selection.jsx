import { useState } from "react";
import "./selection.css"

function SelectionApp() {

    const [counter, setCounter] = useState(1)
    const [advice, setAdvice] = useState([
        "Learn react",
        "make projects",
        "earn money",
        "invest your earnings"
    ])

    function nextHandler() {
        if (counter < 4) {
            setCounter((c) => {
                console.log(c);
                return counter + 1
            })
        }
    }

    function previousHandler() {
        if (counter > 1) {
            setCounter((c) => {
                console.log(c);
                return counter - 1
            })
        }
    }


    return (
        <>
            <div style={{ width: "100vw", height: "100vh", background: "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" }}>

                <h1 style={{ textAlign: "center", padding: "15px 0px", fontSize: "2.5rem" }}>Selection Advice</h1>

                <div style={{ margin: "25px 20px", height: "500px", backgroundColor: "white", borderRadius: "20px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                        {Array.from([1, 2, 3, 4], (x) => (

                            <div style={{
                                width: "50px", height: "50px", backgroundColor:
                                    counter >= x ? "orange" : "grey"
                                , borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                            }}>
                                {x}
                            </div>

                        ))}
                    </div>

                    <div style={{ width: "100%", textAlign: "center", padding: "10px", margin: "20px 0px", height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1>
                            {
                                advice[counter - 1]
                            }
                        </h1>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        {
                            Array.from(["Previous", "Next"], (btn) => (
                                <button className="btns" onClick={btn == "Previous" ? previousHandler : nextHandler} >
                                    {
                                        btn
                                    }
                                </button>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default SelectionApp;
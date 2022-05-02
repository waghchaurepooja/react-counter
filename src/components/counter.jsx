

import { useState} from "react";
const Counter = () =>
{
    const [Count , setCount] = useState(0);
    const handleChange = (value) =>
    {
        setCount(Count + value);
    }

    return (
        <div className = "ShowCount">
            <h1 className = {`${Count%2 === 0 ? "green" : "red"}`}>Count : {Count}</h1>
            <div className="buttonbox">
                <div className="decreasebutton">
                    {/* <button className = "button" onDoubleClick ={() =>{ */}
                    <button className = "button" onClick ={() =>{
                        // handleChange(2);

                        handleChange(1);

                    }}>Increase</button>
                </div>
                -
                <div className="increasebutton">
                    {/* <button className = "button" onDoubleClick ={() =>{ */}
                    <button className = "button" onClick ={() =>{
                        if(Count <= 0)
                        {
                            return;
                        }
                        // handleChange(-2);

                        handleChange(-1);
                        
                    }}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export { Counter };
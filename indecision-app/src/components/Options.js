import React from "react";
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            {props.option.length > 0 ? <p>Your option{props.option.length > 1 ? 's' : undefined} here.</p> : <p>Please add an option to get started!</p>}
            <button
                //disabled={!props.option.length > 0}
                onClick={props.handleDeleteOptions}>
                Remove all
            </button>
            {[...props.option].map((value, index) => (
                <Option
                    key={index}
                    option={value}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );
};

export default Options;
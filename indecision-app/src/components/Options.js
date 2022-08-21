import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button
                className="button button--link"
                disabled={!props.option.length > 0}
                onClick={props.handleDeleteOptions}

            >
                Remove all
            </button>
        </div>
        <p className="widget__message">
            {props.option.length > 0 ? `Your option${props.option.length > 1 ? 's' : undefined} here.` : "Please add an option to get started!"}
        </p>
        {[...props.option].map((value, index) => (
            <Option
                key={index}
                option={value}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}

    </div>
);

export default Options;
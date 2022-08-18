import React from "react";

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should i do?
            </button>
        </div>
    );
};

export default Action;

import React from "react";

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.title && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'INDECISION',
    subtitle: 'Put your options here, and I will pick your decision.',
};

export default Header;

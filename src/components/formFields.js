import React, { Component } from 'react';


export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className="form-input__label">{title}</label>
                <input className="form-input__input" type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input, gray } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className={`form-button__button ${gray ? "form-button__gray-button" : ""}`} type={type} {...input} onClick={onClick}>
                    {title}
                </button>
            </div>
        )
    }
}

export class LongGrayButton extends Component {
    render() {
        const { className, title, type, onClick, input, long } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className={`form-button__button ${long ? "form-button__long-gray" : ""}`} type={type} {...input} onClick={onClick}>
                    {title}
                </button>
            </div>
        )
    }
}
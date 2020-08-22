import React, { Component } from "react";
import "./addTown.sass";
import Title from "../title/Title";

export class AddTown extends Component {
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.onSearch(event.target.value);
    }
  };
  render() {
    const renderResults = () => {
      if (this.props.data.searched) {
        let classForCity;
        if (this.props.city.classActive) {
          classForCity = "search__results__single  animated fadeIn active";
        } else {
          classForCity = "search__results__single  animated fadeIn";
        }
        return (
          <React.Fragment>
            <div className={classForCity} onClick={this.props.onClickOnCity}>
              <div className="search__results__single--city animated fadeIn">
                {this.props.data.searched}
              </div>
            </div>
          </React.Fragment>
        );
      }
    };
    return (
      <div className="add-town open">
        <div
          className="close-popup animated fadeIn delay-1s"
          onClick={this.props.onClose}>
          <img
            src={require(`../../img/cancel.svg`)}
            alt=""
            className="close-popup--icon"
          />
        </div>
        <Title title="Add new location" svgIcon="book" />
        <div className="title__text--subtitle animated fadeIn">
          Find a city and tap on it to add
        </div>

        <div className="search animated fadeIn">
          <form action="#" className="search__form">
            <input
              type="text"
              name="search"
              className="search__form__input"
              placeholder="Start typing here"
              onKeyPress={this.handleKeyPress}
            />
          </form>
        </div>
        {this.props.errSearch ? (
          <h2 className="error"> No such city, please type correct name</h2>
        ) : (
          <div className="search__results">{renderResults()}</div>
        )}
      </div>
    );
  }
}

export default AddTown;

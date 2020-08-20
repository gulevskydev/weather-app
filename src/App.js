import React, { Component } from "react";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import config from "./config.json";
import "./App.sass";
import Forecast from "./components/forecast/Forecast";
import Others from "./components/others/Others";
import AddTown from "./components/addTown/AddTown";
import Loader from "./components/loader/loader";

class App extends Component {
  state = {
    data: null,
    isOpen: false,
    cities: [],
    addNew: false,
    detailsCurrentWeather: null,
    detailsByCity: false,
    loader: true,
  };

  componentDidMount = () => {
    function error(err) {
      return <h1>`You have been decline your current position`;</h1>;
    }

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.APIKEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            data: data,
            currentLoc: data,
          })
        );
    };
    navigator.geolocation.getCurrentPosition(success, error);

    const savedCities = JSON.parse(localStorage.getItem("savedCities"));
    if (savedCities) {
      this.setState({ cities: savedCities });
    }
  };

  handleClick = () => {
    if (this.state.data) {
      const data = this.state.data.name;

      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${data}&units=metric&appid=${config.APIKEY} `
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState(
            {
              detailsCurrentWeather: data.list,
            },
            () => {
              this.setState({ isOpen: true });
              console.log(this.state);
            }
          )
        );
    }
  };
  clickDetailsByCity = (data) => {
    this.setState({ data: data }, () => {
      this.handleClick();
    });
  };
  handleClose = () => {
    this.setState({
      isOpen: false,
      addNew: false,
      searched: null,
      detailsByCity: false,
      mainPage: true,
      data: this.state.currentLoc,
    });
  };

  handleAddNewTown = () => {
    this.setState({ addNew: true });
  };

  handleSearch = (name) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${config.APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          this.state.cities.filter((city) => city.name === data.name).length > 0
        ) {
          data.classActive = true;
        }

        this.setState({
          city: data,
          searched: data.name,
        });
      });
  };

  handleDeleteCities = () => {
    this.setState({ cities: [] });
    localStorage.removeItem("savedCities");
  };

  handleClickOnCity = () => {
    let updateCities = this.state.cities.slice();
    let city = this.state.city;
    city.classActive = true;

    //remove class Active && remove city from state OR add new city to state
    if (updateCities.filter((cities) => cities.name === city.name).length > 0) {
      updateCities = updateCities.filter((cities) => cities.name !== city.name);
      city.classActive = false;
    } else {
      updateCities.push(city);
      this.handleClose();
    }
    this.setState({ cities: updateCities, mainPage: false });
    localStorage.setItem("savedCities", JSON.stringify(updateCities));
  };

  render() {
    const renderMainPage = () => {
      return (
        <React.Fragment>
          <CurrentWeather
            isMainPage={this.state.mainPage}
            curLocation={this.state.currentLoc}
            data={this.state.data}
            onOpen={this.handleClick}
          />
          {this.state.isOpen ? (
            <Forecast
              data={this.state.detailsCurrentWeather}
              onClose={this.handleClose}
            />
          ) : (
            <Others
              onAddTown={this.handleAddNewTown}
              searched={this.state.searched}
              data={this.state.data}
              cities={this.state.cities}
              onClickCityDetails={this.clickDetailsByCity}
              onDeleteCities={this.handleDeleteCities}
            />
          )}
        </React.Fragment>
      );
    };

    const renderSearchPage = () => {
      return (
        <React.Fragment>
          <AddTown
            onSearch={this.handleSearch}
            data={this.state}
            onClickOnCity={this.handleClickOnCity}
            onClose={this.handleClose}
            city={this.state.city}
          />
        </React.Fragment>
      );
    };

    // Rendering page
    if (this.state.data) {
      if (this.state.addNew) {
        return renderSearchPage();
      } else {
        return renderMainPage();
      }
    } else {
      return <Loader />;
    }
  }
}

export default App;

import Humidity from "../imgs/humidity.png";
import Wind from "../imgs/wind.png";

const Card = ({ weatherData }) => {
  return (
    <div className="weatherCard">
      {weatherData.name !== undefined ? (
        <>
          <div className="card-wrap">
            <div className="cityName">
              <h1>{weatherData.name}</h1>
              <h3>{weatherData.weather[0].main}</h3>
            </div>
            <div className="tempIcon">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </div>
            <div className="cityTemp">
              <h1> {weatherData.main.temp} °C</h1>
            </div>
            <div className="weatherDetail">
              <div className="tempDetail">
                <div className="detailImage">
                  <img src={Humidity} />
                </div>
                <div className="detailContent">
                  <div className="detailValue">
                    <h5>{weatherData.main.humidity}%</h5>
                  </div>
                  <detail className="detailName">
                    <h5>Humidity</h5>
                  </detail>
                </div>
              </div>
              <div className="tempDetail">
                <div className="detailImage">
                  <img src={Wind} />
                </div>
                <div className="detailContent">
                  <div className="detailValue">
                    <h5 id="noSpace"> {weatherData.wind.deg}°</h5>
                  </div>
                  <detail className="detailName">
                    <h5>Wind</h5>
                  </detail>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="enterCity">
            <h3>ABN Weather Forecast</h3>
            <h4>
              is digital web-application that provide users
              with weather information and forecasts for their desired
              locations. This app utilize data from OpenWeather API to deliver
              accurate and up-to-date weather reports.
            </h4>
          </div>
        </>
      )}
    </div>

    // I am using ternary operator because we dont have any city detail as we are using objects to present data and data is coming from runtime search of city to present on screen. If we dont use ternary operator then there will be error in excuting the code.
  );
};

export default Card;

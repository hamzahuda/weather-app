import "./styles/reset.css";
import "./styles/styles.scss";
import getWeatherData from "./modules/weather-data";
import updateDataDisplayed from "./modules/view";

function searchSubmitted(event) {
    const searchQuery = document.querySelector(".search-bar").value;
    getWeatherData(searchQuery).then((data) => {
        console.log(data);
        if (!data.error) {
            let location;
            if (data.location.name === data.location.region) {
                location = data.location.name;
            } else {
                location = `${data.location.name} (${data.location.region})`;
            }
            updateDataDisplayed(
                location,
                data.current.condition.text,
                data.current.condition.icon,
                data.current.temp_c,
                data.current.feelslike_c
            );
        } else {
            // error handle here
        }
    });
    event.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", searchSubmitted);
});

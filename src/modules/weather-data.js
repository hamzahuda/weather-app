export default async function getWeatherData(location) {
    const urlParams = new URLSearchParams({
        key: "bfedc8c696ef4914a7b163401232308",
        q: location,
    }).toString();
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?${urlParams}`
    );
    const data = await response.json();
    return data;
}

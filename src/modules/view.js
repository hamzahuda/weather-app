export default function updateDataDisplayed(
    location,
    condition,
    icon,
    temp,
    feelslike
) {
    const locationNode = document.querySelector(".location");
    const conditionNode = document.querySelector(".condition");
    const iconNode = document.querySelector(".icon");
    const tempNode = document.querySelector(".temp");
    const feelslikeNode = document.querySelector(".feelslike");

    locationNode.textContent = location;
    conditionNode.textContent = condition;

    iconNode.innerHTML = "";
    const iconImg = new Image(100, 100);
    iconImg.src = icon;
    iconNode.appendChild(iconImg);

    tempNode.textContent = `${temp}°C`;
    if (feelslike !== temp) {
        feelslikeNode.textContent = `Feels Like: ${feelslike}°C`;
    }
}

//We create an async/wait function to fetch the infos of the api
async function fetchEmployees(){
    let results = await fetch(`https://randomuser.me/api/?results=12`);
    return await results.json();
}

fetchEmployees()
    .then(data =>createGallery(data.results));

//function to create dynamically new HTML elements
const createElements = (el, props,  value, text="") => {
    return $(`<${el} ${props}=${value}></${el}>`)
        .text(`${text}`);
};

// function to lunch the gallery of 12 employees
const createGallery = (allEmployees) => {
    const $gallery = $("#gallery");
    allEmployees.map(employee => {
        const cardDiv = createElements("div", "class", "card",);
        const cardImgContainer = createElements("div", "class", "card-img-container");
        const $img = createElements("img", "class", "card-img")
            .prop({
                "src": employee.picture.large,
                "alt": "profile picture"
            });
        const cardInfo = createElements("div", "class", "card-info-container");
        const nameInfo = createElements("h3", "id", "name", `${employee.name.first} ${employee.name.last}`)
            .prop("class", "card-name cap");
        const mailInfo = createElements("p", "class", "card-text",`${employee.email}`);
        const locationInfo = createElements('p', "class", "card-text cap", `${employee.location.city}, ${employee.location.state}`);

        $gallery.append(cardDiv);
        cardDiv.append(cardImgContainer);
        cardImgContainer.append($img);
        cardDiv.append(cardInfo);
        cardInfo.append(nameInfo);
        cardInfo.append(mailInfo);
        cardInfo.append(locationInfo);
    });
};



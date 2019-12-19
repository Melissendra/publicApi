class Card {
    constructor(img, firstName, lastName, mail,city, state){
        this.img = img;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.city = city;
        this.state = state;
    }

    employeesCard(index){
        const gallery = document.querySelector("#gallery");
        const card = new HtmlElements("div",
            {
                "class": "card",
                "id" : index
            },
            gallery).newElement();
        const imgContainer = new HtmlElements("div", {"class": "card-img-container"}, card)
            .newElement();

        const img = new HtmlElements("img",
            {
            "class":"card-img",
            "src": this.img,
            "alt": "profile picture"
            },
            imgContainer).newElement();

        const cardInfo = new HtmlElements("div",
            {
            "class": "card-info-container"
             },
            card).newElement();

        const nameContainer = new HtmlElements("h3",
            {
                "id": "name",
                "class": "card-name cap"
            },
            cardInfo, this.firstName + " " + this.lastName).newElement();

        const mail = new HtmlElements("p",
            {
            "class": "card-text"
            },cardInfo, this.mail).newElement();

        const location= new HtmlElements("p",
            {
                "class": "card-text cap"
            }, cardInfo, this.city + ", " + this.state).newElement();
    }
}

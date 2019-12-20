class ModalWindow {
    constructor(img, name, email, city, phone, address, birthday) {
        this.img = img;
        this.name = name;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
    }

    createModalWindow(index) {
        const container = document.querySelector("#gallery");
        const modalContainer = new HtmlElements("div", {"class": "modal-container"}, container)
            .newElement();
        const modal = new HtmlElements("div", {"class": "modal"}, modalContainer)
            .newElement();
        const btn = new HtmlElements("button",
            {
                "id": "modal-close-btn",
                "class": "modal-close-btn"
            }, modal).newElement();
        const text = new HtmlElements("strong", {"class": ""}, btn, "X")
            .newElement();
        const infoContainer = new HtmlElements("div", {"class": "modal-info-container"}, modal)
            .newElement();
        const modalImage = new HtmlElements("img",
            {
                "class": "modal-img",
                "src": this.img,
                "alt": "profile picture"
            }, infoContainer).newElement();
        const name = new HtmlElements("h3", {"class": "modal-name cap"}, infoContainer, this.name)
            .newElement();
        const mail = new HtmlElements("p", {"class": "modal-text"}, infoContainer, this.email)
            .newElement();
        const city = new HtmlElements("p", {"class": "modal-text cap"}, infoContainer, this.city)
            .newElement();
        const line = new HtmlElements("hr", {"": ""}, infoContainer).newElement();
        const phone = new HtmlElements("p", {"class": "modal-text"}, infoContainer, this.phone)
            .newElement();
        const address = new HtmlElements('p', {"class": "modal-text"}, infoContainer, this.address)
            .newElement();
        const birthday = new HtmlElements("p", {"class": "modal-text"}, infoContainer, this.birthday)
            .newElement();
    }

    handler(){
        const card = document.querySelector(".card");
        card.addEventListener("click", ()=>{
            return this.createModalWindow()
        });
    }
}
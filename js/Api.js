class Api{
    constructor(url){
        this.url = url;
        this.gallery = new Card()
    }

    async fetchEmployees(){
        let results = await fetch(this.url);
        return await results.json();
    }


    createGallery (allEmployee){
        const $gallery = $("#gallery");
        allEmployee.map(employee => {
            const cardDiv = new Card("div", "class", "card");
            cardDiv.createElements($gallery);
        });
    }
}

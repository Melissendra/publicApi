class HtmlElements {
    constructor(el, props, value, text="", container){
        this.el = el;
        this.props = props;
        this.value = value;
        this.text = text;
        this.container = container
    }

    createElements() {
       return $(`<${this.el} ${this.props}=${this.value}></${this.el}>`).text(`${this.text}`);

    }

    createImages(url){
        return $(`<${this.el} ${this.props}=${this.value} src=${url} alt="profile picture">`);
    }
}

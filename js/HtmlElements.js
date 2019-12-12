class HtmlElements {
    constructor(el, props, value, text="", container){
        this.el = el;
        this.props = props;
        this.value = value;
        this.text = text;
        this.container = container
    }

    createElements() {
       const $el = $(`<${this.el} ${this.props}=${this.value}></${this.el}>`).text(`${this.text}`);
       $(this.container).append($el);
    }

    createImages(url){
        const $img = $(`<${this.el} ${this.props}=${this.value} src=${url} alt="profile picture">`);
        $(this.container).append($img);
    }
}

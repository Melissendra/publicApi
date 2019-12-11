class HtmlElements {
    constructor(el, props, value, text=""){
        this.el = el;
        this.props = props;
        this.value = value;
        this.text = text;
    }

    createElements(container) {
       const $el = $(`<${this.el} ${this.props}=${this.value}></${this.el}>`).text(`${this.text}`);
       container.append($el);
    }
}

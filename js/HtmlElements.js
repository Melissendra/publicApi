class HtmlElements {
    constructor(el, props, value, text=""){
        this.el = el;
        this.props = props;
        this.value = value;
        this.text = text;
    }

    createElements(container, props1="", value1="", props2="", value2="") {
        const $el =  $(`<${this.el} ${this.props}=${this.value}></${this.el}>`).text(`${this.text}`);
        $el.prop(props1, value1);
        $el.prop(props2, value2);
        container.append($el);
        return $el;
    }
}

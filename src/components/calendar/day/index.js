import {LitElement} from "lit-element";
import styles from "./styles.pcss";
import template from "./default.html.js";

class CalendarDay extends LitElement {
    static get properties() {
        return {
            dayNumber: {type: Number},
            isToday: {type: Boolean},
            isBlocked: {type: Boolean},
        };
    }

    constructor() {
        super();
        this.addEventListener('click', this.handleClick);
        this.dayNumber = 0;
        this.isToday = false;
        this.isBlocked = false;
    }

    static getStyles = () => styles;

    handleClick() {
        alert('clicked');
    }

    render() {
        return template(this);
    }
}

customElements.define('nh-calendar-day', CalendarDay);
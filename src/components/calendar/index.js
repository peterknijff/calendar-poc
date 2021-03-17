import {LitElement} from 'lit-element';
import template from './default.html.js';
import styles from "./styles.pcss";
import {getCurrentMonthNumber, getCurrentYear} from "../../utils/dates";

class Calendar extends LitElement {
    static get properties() {
        return {
            month: {type: String},
            year: {type: Number},
            datesBlocked: {type: Array},
        };
    }

    constructor() {
        super();
        this.month = getCurrentMonthNumber();
        this.year = getCurrentYear();
        this.datesBlocked = [];
    }

    static getStyles = () => styles;

    render() {
        return template(this);
    }
}

customElements.define('nh-calendar', Calendar);
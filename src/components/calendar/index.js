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
        this.addEventListener('select-days', (e) => this._selectDates(e.detail));
    }

    static getStyles = () => styles;

    render() {
        return template(this);
    }

    /**
     * @param {{currentDate: number, selection: number}} options
     * @return void
     */
    _selectDates(options) {
        console.log(options);
        console.log(options.currentDate, options.selection);
    }
}

customElements.define('nh-calendar', Calendar);
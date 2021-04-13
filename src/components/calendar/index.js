import {LitElement} from 'lit-element';
import template from './default.html.js';
import styles from "./styles.pcss";
import {getCurrentMonthNumber, getCurrentYear} from "../../utils/dates";

class CalendarMonth extends LitElement {
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
        this.selectedDays = [];
        this.addEventListener('select-days', (e) => this._selectDays(e.detail));
        this.addEventListener('deselect-days', (e) => this._deselectDays(e.detail));
    }

    static getStyles = () => styles;

    render() {
        return template(this);
    }

    /**
     * @param {{currentDate: number, selection: number}} options
     * @return void
     */
    _selectDays(options) {
        if (this.selectedDays.length) {
            this._deselectDays();
        }
        const selector = [];
        for (let i = 0; i < options.selection; i++) {
            selector.push(`nh-calendar-day[data-value="${options.currentDate + i}"]`);
        }
        const elements =  this.shadowRoot.querySelectorAll(selector.join(','));

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            if (!element.selected.active) {
                const daySelected = {first: i === 0, last: i === elements.length - 1, active: true};
                this.selectedDays[options.currentDate + i] = daySelected;
                element.selected = daySelected;
            }
        }
    }

    /**
     * @return void
     */
    _deselectDays() {
        if (!this.selectedDays.length) {
            return;
        }

        const selector = [];
        for (let key in this.selectedDays) {
            selector.push(`nh-calendar-day[data-value="${key}"]`);
        }
        const elements =  this.shadowRoot.querySelectorAll(selector.join(','));
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.selected.active) {
                element.selected = {first: false, last: false, active: false};
            }
        }
        this.selectedDays = [];
    }
}

customElements.define('calendar-month', CalendarMonth);
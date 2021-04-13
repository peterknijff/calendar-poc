import {css, html, LitElement} from "lit-element";
import {getCurrentYear} from "../../utils/dates";

class CalendarYear extends LitElement {
    static get properties() {
        return {
            months: {type: Array},
            year: {type: Number},
        };
    }

    constructor() {
        super();
        this.year = getCurrentYear();
        this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
    }
    
    static get styles() {
        return css`
            /* Selects the host element */
            :host { 
                display: grid;
                width: 100%;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 20px;
                grid-row-gap: 20px;
            }
        `;
    }

    render() {
        return html`${this.months.map((month) => {
            return html`<calendar-month month="${month}" year="${this.year}"></calendar-month>`;
        })}`;
    }
}

customElements.define('calendar-year', CalendarYear);
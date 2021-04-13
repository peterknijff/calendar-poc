import {html, LitElement} from "lit-element";
import {getCurrentMonthNumber, getCurrentYear} from "../../utils/dates";

class CalendarComponent extends LitElement {
    static get properties() {
        return {
            start: {type: String},
            end: {type: String}
        };
    }

    constructor() {
        super();

        const currentYear = getCurrentYear();
        const currentMonth = getCurrentMonthNumber();

        this.start = `${currentYear}-${currentMonth}`;
        this.end = `${currentYear + 2}-${currentMonth}`;
    }

    render() {
        const years = this.getYears();

        return html`${years.map((year) => {
            const months = JSON.stringify(this.getMonths(year));
            return html`<calendar-year year="${year}" months="${months}"></calendar-year>`;
        })}`;
    }

    getYears() {
        const years = [];
        const startYear = Number(this.start.split('-')[0]);
        const endYear = Number(this.end.split('-')[0]);

        for (let i = startYear; i <= endYear; i++) {
            years.push(i);
        }

        return years;
    }

    getMonths(year) {
        const months = [];
        const startYear = Number(this.start.split('-')[0]);
        const endYear = Number(this.end.split('-')[0]);

        let startMonth = 1;
        let endMonth = 12;

        if (year === startYear) {
            startMonth = Number(this.start.split('-')[1]);
        }

        if (year === endYear) {
            endMonth = Number(this.end.split('-')[1]);
        }

        for (let i = startMonth; i <= endMonth; i++) {
            months.push(i);
        }

        return months;
    }
}

customElements.define('calendar-component', CalendarComponent);
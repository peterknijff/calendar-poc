import {LitElement} from "lit-element";
import styles from "./styles.pcss";
import template from "./default.html.js";
import {PropertyValues} from "lit-element/lib/updating-element";

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
        this.dayNumber = 0;
        this.isToday = false;
        this.isBlocked = false;
    }

    static getStyles = () => styles;

    // updated(changedProperties) {
    //     changedProperties.forEach((oldValue, propName) => {
    //         console.log(`${propName} changed. oldValue: ${oldValue}`);
    //     });
    // }

    async firstUpdated(_changedProperties) {
        // Give the browser a chance to paint
        await new Promise((r) => setTimeout(r, 0));
        this.addEventListener('click', this.handleClick);
    }

    handleClick() {
        if (!this.isBlocked) {
            const moreDays = confirm('Do you want to select multiple days?');

            if (moreDays) {
                const amountOfDaysToSelect = prompt(`Select how many dates from ${this.isToday ? 'today' : 'day'}?`, '3');
                // Select days from this dayNumber.
                let selectDaysEvent = new CustomEvent('select-days', {
                    detail: {currentDate: this.dayNumber, selection: amountOfDaysToSelect},
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(selectDaysEvent);
            }

            if (!moreDays) {
                const blockDay = confirm('Do you want to block this day?');
                if (blockDay) {
                    this.isBlocked = true;
                    return;
                }
            }
        }

        if (this.isBlocked) {
            const unBlockDate = confirm('Blocked date, do you want to unblock it?');
            
            this.isBlocked = !unBlockDate;
            // Reflect change in calendar/index.js as well
        }
    }

    render() {
        return template(this);
    }
}

customElements.define('nh-calendar-day', CalendarDay);
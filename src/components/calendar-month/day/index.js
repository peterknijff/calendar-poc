import {LitElement} from "lit-element";
import styles from "./styles.pcss";
import template from "./default.html.js";

class CalendarDay extends LitElement {
    static get properties() {
        return {
            dayNumber: {type: Number},
            isToday: {type: Boolean},
            isBlocked: {type: Boolean},
            selected: {type: Object},
        };
    }

    constructor() {
        super();
        this.dayNumber = 0;
        this.isToday = false;
        this.isBlocked = false;
        this.selected = {first: false, last: false, active: false};
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
        if (this.selected.active) {
            const deselectSelection = this.checkDeslectSelection();

            if (deselectSelection) {
                this.handleDeselectSelection();
                return;
            }
        }

        if (!this.isBlocked) {
            const selectMultipleDays = this.checkMulitpleDays();

            if (selectMultipleDays) {
                this.handleSelectMultipleDays();
                return;
            }

            this.handleBlockDay();
            return;
        }

        if (this.isBlocked) {
            const result = this.handleBlockDayClick();

            if (!result) {
                const selectMultipleDays = this.checkMulitpleDays();

                if (selectMultipleDays) {
                    this.handleSelectMultipleDays();
                }
            }
        }
    }

    handleBlockDay(){
        const blockDay = confirm('Do you want to block this day?');
        if (blockDay) {
            this.isBlocked = true;
        }
    }

    handleBlockDayClick(){
        const unBlockDate = confirm('Blocked date, do you want to unblock it?');
        this.isBlocked = !unBlockDate;
        return unBlockDate;
    }

    checkMulitpleDays() {
        return confirm('Do you want to select multiple days?');
    }

    handleSelectMultipleDays(){
        const amountOfDaysToSelect = prompt(`Select how many dates from ${this.isToday ? 'today' : 'day'}?`, '3');

        if (!amountOfDaysToSelect){
            return;
        }

        // Select days from this dayNumber.
        let selectDaysEvent = new CustomEvent('select-days', {
            detail: {currentDate: this.dayNumber, selection: amountOfDaysToSelect},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(selectDaysEvent);
    }

    render() {
        return template(this);
    }

    checkDeslectSelection() {
        return confirm('Do you want to deselect this selection?');
    }

    handleDeselectSelection() {
          // Select days from this dayNumber.
        let selectDaysEvent = new CustomEvent('deselect-days', {
            detail: {day: this.dayNumber},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(selectDaysEvent);
    }
}

customElements.define('nh-calendar-day', CalendarDay);
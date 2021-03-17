import {html} from "lit-element";
import {
    getAmountOfDaysLeftInCalendar,
    getFirstDayOfMonth,
    getDaysInMonth,
    getTodayInMonth,
    isDayToday
} from "../../utils/dates";

/**
 * @param {Date} month
 * @return TemplateResult
 */
export default (month) => {
    const today = getTodayInMonth(month);
    const firstDaysOfMonth = getFirstDayOfMonth(month);
    const daysInMonth = getDaysInMonth(month);
    const lastDaysOfMonth = getAmountOfDaysLeftInCalendar(firstDaysOfMonth.length + daysInMonth.length);

    return html`
        ${firstDaysOfMonth.map(() => html`<li></li>`)}
        
        ${daysInMonth.map((day) => {
            const classes = determineDayState(day, { today: today });
            return html`
                <li class="day ${classes.join(',')}">
                    <span>${day}</span>
                </li>
            `;
        })}
        
        ${lastDaysOfMonth.map(() => html`<li></li>`)}
    `
}

/**
 * @param {number} day
 * @param {{today: number}} options
 * @return String[]
 */
function determineDayState(day, { today }) {
    const classes = [];

    if (isDayToday(day, today)) {
        classes.push('day--today');
    }

    return classes;
}

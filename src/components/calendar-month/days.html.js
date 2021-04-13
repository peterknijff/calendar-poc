import {html} from "lit-element";
import './day/index.js';
import {
    getAmountOfDaysLeftInCalendar,
    getFirstDayOfMonth,
    getDaysInMonth,
    getTodayInMonth,
    isDayToday
} from "../../utils/dates";

/**
 * @param {Date} month
 * @param {String[]} datesBlocked
 * @return TemplateResult
 */
export default (month, datesBlocked) => {
    const today = getTodayInMonth(month);
    const firstDaysOfMonth = getFirstDayOfMonth(month);
    const daysInMonth = getDaysInMonth(month);
    const lastDaysOfMonth = getAmountOfDaysLeftInCalendar(firstDaysOfMonth.length + daysInMonth.length);

    return html`
        ${firstDaysOfMonth.map(() => html`<li></li>`)}
        
        ${daysInMonth.map((day) => {
            const dayDate = new Date();
            dayDate.setDate(day);
            
            return html`<nh-calendar-day
                    .dayNumber="${day}"
                    .isToday="${isDayToday(day, today)}"
                    .isBlocked="${datesBlocked.includes(dayDate.toLocaleDateString('en'))}"
                    data-value="${day}"
                ></nh-calendar-day>`;
        })}
        
        ${lastDaysOfMonth.map(() => html`<li></li>`)}
    `
}
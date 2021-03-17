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
 * @param {String[]} datesBlocked
 * @return TemplateResult
 */
export default (month, datesBlocked) => {
    const todayDayNumber = getTodayInMonth(month);
    const firstDaysOfMonth = getFirstDayOfMonth(month);
    const daysInMonth = getDaysInMonth(month);
    const lastDaysOfMonth = getAmountOfDaysLeftInCalendar(firstDaysOfMonth.length + daysInMonth.length);

    return html`
        ${firstDaysOfMonth.map(() => html`<li></li>`)}
        
        ${daysInMonth.map((day) => {
            const classes = determineDayState(day, month,{
                today: todayDayNumber,
                datesBlocked: datesBlocked
            });
            
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
 * @param {Date} month
 * @param {{today: number, blockedDates: string[]}} options
 * @return String[]
 */
function determineDayState(day, month, {today, datesBlocked}) {
    const baseDate = new Date();
    baseDate.setDate(day);

    const classes = [];

    if (isDayToday(day, today)) {
        classes.push('day--today');
    }

    if (datesBlocked.includes(baseDate.toLocaleDateString())) {
        classes.push('day--blocked');
    }

    return classes;
}

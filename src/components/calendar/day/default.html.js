import {html} from "lit-element";

/**
 * @param {{
 * dayNumber: number,
 * isToday: boolean,
 * isBlocked: boolean,
 * }} options
 * @return TemplateResult
 */
export default (options) => {
    const classes = determineDayState(options);
    return html`
        <link rel="stylesheet" href="dist/style.css">
        <li class="day ${classes.join(' ')}"><span>${options.dayNumber}</span></li>
    `;
}

/**
 * @param {boolean} isToday
 * @param {boolean} isBlocked
 * @return String[]
 */
function determineDayState({isToday, isBlocked}) {
    const classes = [];

    if (isToday) {
        classes.push('day--today');
    }

    if (isBlocked) {
        classes.push('day--blocked');
    }

    return classes;
}
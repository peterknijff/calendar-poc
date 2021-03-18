import {html} from "lit-element";

/**
 * @param {{
 * dayNumber: number,
 * isToday: boolean,
 * isBlocked: boolean,
 * selected: {first: boolean, last: boolean, active: boolean}
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
 * @param {{first: boolean, last: boolean, active: boolean}} selected
 * @return String[]
 */
function determineDayState({isToday, isBlocked, selected}) {
    const classes = [];

    if (isToday) {
        classes.push('day--today');
    }

    if (isBlocked) {
        classes.push('day--blocked');
    }

    if (selected) {
        if (selected.active) {
            classes.push('day--selected');
        }

        if (selected.first) {
            classes.push('day--selected-first');
        }

        if (selected.last) {
            classes.push('day--selected-last');
        }
    }

    return classes;
}
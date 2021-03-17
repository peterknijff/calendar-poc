import { html } from "lit-element";
import renderDays from './days.html.js'
import { getWeekDays } from "../../utils/dates";

/**
 * @param {{
 * month: number,
 * year: number,
 * datesBlocked: String[],
 * }} options
 * @return TemplateResult
 */
export default (options) => {
    const month = new Date(options.year, options.month - 1);

    return html`
        <link rel="stylesheet" href="dist/style.css">
        <div class="calendar">
            <header>
                <!-- Current month and year -->
                <div class="month">
                    ${ month.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>
            </header>

            <ol class="week-days">
                ${ getWeekDays().map((day) => html`<li>${day}</li>`) }
            </ol>

            <ol class="days">
                ${ renderDays(month, options.datesBlocked) }
            </ol>
        </div>`
};
import {html} from "lit-element";


export default ({options}) => {
    const firstDaysOfMonth = getFirstDayOfMonth(options.date);
    const daysInMonth = daysInThisMonth(options.date);
    const lastDaysOfMonth = getDaysLeft(firstDaysOfMonth.length + daysInMonth.length);

    return html`
        <link rel="stylesheet" href="dist/style.css">
        <div class="calendar">
            <header>
                <!-- Current month and year -->
                <div class="month">
                    ${options.date.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>

                <!-- Right slot -->
                <!--<div class="right-slot">-->
                <!--<a href="#">Blokkeer deze maand</a>-->
                <!--</div>-->
            </header>

            <!-- Days of week -->
            <ol class="days-of-week">
                <li>Ma</li>
                <li>Di</li>
                <li>Wo</li>
                <li>Do</li>
                <li>Vrij</li>
                <li>Za</li>
                <li>Zo</li>
            </ol>

            <ol class="days">
                ${ firstDaysOfMonth.map(() => html`
                    <li></li>`
                )}
                
                ${ daysInMonth.map((day) => {
                    const classes = Math.floor(Math.random() * 10) === 0 ? ['day--blocked'] : [''];
                    return html`<li class="day ${ classes.join(',') }"><span>${day}</span></li>`;
                } )}
                
                ${ lastDaysOfMonth.map(() => html`
                    <li></li>`
                )}
            </ol>
        </div>`
};

function daysInThisMonth(date = new Date()) {
    const days = [];
    const amountOfDays = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    for (let i = 1; i <= amountOfDays; i++) {
        days.push(i);
    }

    return days;
}
function getFirstDayOfMonth(date = new Date()) {
    const days = [];
    const amountOfDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    for (let i = 1; i < amountOfDays; i++) {
        days.push(i);
    }

    return days;
}

function getDaysLeft(amountOfDays) {
    if (!amountOfDays) {
        return [];
    }
    const days = [];
    const daysLeft = 7 - (amountOfDays % 7);

    for (let i = 1; i <= daysLeft; i++) {
        days.push(i);
    }

    return days;
}
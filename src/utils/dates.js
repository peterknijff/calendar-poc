/**
 * @return Date[]
 */
export function getWeekDays() {
    const baseDate = new Date();
    const weekDays = [];

    // Set date to monday
    baseDate.setDate((baseDate.getDate() - baseDate.getDay() + 1));

    for (let i = 0; i < 7; i++) {
        weekDays.push(
            new Date(baseDate).toLocaleString(
                'default',
                {
                    weekday: 'short'
                }
            )
        );

        // Proceed to next day
        baseDate.setDate(baseDate.getDate() + 1);
    }

    return weekDays;
}

/**
 * @param {Date} date
 * @return number
 */
export function getCurrentMonthNumber(date = new Date) {
    return date.getMonth() + 1;
}

/**
 * @param {Date} date
 * @return number
 */
export function getCurrentYear(date = new Date) {
    return date.getFullYear();
}

/**
 * @param {Date} date
 * @return number[]
 */
export function getDaysInMonth(date = new Date()) {
    const days = [];
    const amountOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= amountOfDays; i++) {
        days.push(i);
    }

    return days;
}

/**
 * @param {Date} month
 * @return number
 */
export function getTodayInMonth(month) {
    const today = new Date();

    if (today.getMonth() !== month.getMonth()) {
        return 0;
    }

    return today.getDate();
}

/**
 * @param {Date} date
 * @return number[]
 */
export function getFirstDayOfMonth(date = new Date()) {
    const days = [];
    const amountOfDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    for (let i = 1; i < amountOfDays; i++) {
        days.push(i);
    }

    return days;
}

/**
 * @param {number} amountOfDays
 * @return number[]
 */
export function getAmountOfDaysLeftInCalendar(amountOfDays) {
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

/**
 * @param {number} day
 * @param {number} today
 * @return boolean
 */
export function isDayToday(day, today){
    return day === today;
}
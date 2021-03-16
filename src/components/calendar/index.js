import { LitElement } from 'lit-element';
import template from './default.html.js';
import styles from "./styles.pcss";

const today = new Date();
const weekStartsAt = 0;

class Calendar extends LitElement {
    options = {
        todayDate: today,
        weekStartsAt: weekStartsAt,
    }

    getStyles = () => styles

    render() {
        return template(this);
    }
}

customElements.define('nh-calendar', Calendar);
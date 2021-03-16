import {html} from "lit-element";

export default ({options}) => {
    console.log(options);
    return html`
        <link rel="stylesheet" href="dist/style.css">
        <div class="calendar">
            <header>
                <!-- Current month and year -->
                <div class="month">
                    ${options.todayDate.toLocaleString('default', {
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
<!--                <li class="day day&#45;&#45;disabled"><span>29</span></li>-->
<!--                <li class="day day&#45;&#45;disabled"><span>30</span></li>-->
                <li></li>
                <li></li>
                <li class="day day--disabled"><span>1</span></li>
                <li class="day day--disabled"><span>2</span></li>
                <li class="day day--disabled"><span>3</span></li>
                <li class="day day--disabled"><span>4</span></li>
                <li class="day day--today"><span>5</span></li>
                <li class="day"><span>6</span></li>
                <li class="day"><span>7</span></li>
                <li class="day"><span>8</span></li>
                <li class="day"><span>9</span></li>
                <li class="day"><span>10</span></li>
                <li class="day"><span>11</span></li>
                <li class="day"><span>12</span></li>
                <li class="day"><span>13</span></li>
                <li class="day"><span>14</span></li>
                <li class="day day--selected day--selected-start"><span>15</span></li>
                <li class="day day--selected"><span>16</span></li>
                <li class="day day--selected"><span>17</span></li>
                <li class="day day--selected"><span>18</span></li>
                <li class="day day--selected"><span>19</span></li>
                <li class="day day--selected day--selected-end"><span>20</span></li>
                <li class="day"><span>21</span></li>
                <li class="day"><span>22</span></li>
                <li class="day day--blocked"><span>23</span></li>
                <li class="day day--blocked"><span>24</span></li>
                <li class="day day--blocked"><span>25</span></li>
                <li class="day day--blocked"><span>26</span></li>
                <li class="day day--blocked"><span>27</span></li>
                <li class="day"><span>28</span></li>
                <li class="day"><span>29</span></li>
                <li class="day day--blocked"><span>30</span></li>
                <li></li>
                <li></li>
                <li></li>
                <!--<li class="day day&#45;&#45;disabled"><span>1</span></li>-->
                <!--<li class="day day&#45;&#45;disabled"><span>2</span></li>-->
                <!--<li class="day day&#45;&#45;disabled"><span>3</span></li>-->
            </ol>
        </div>`
};
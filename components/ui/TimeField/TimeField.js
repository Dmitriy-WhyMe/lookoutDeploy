import React from 'react'
import Flatpickr from 'react-flatpickr'
import classes from './TimeField.module.scss'
import IconSelect from '../../icons/IconSelect'

function TimeField({ timeStart, timeEnd, onChangeStart, onChangeEnd }) {
    return (
        <div className={classes.Field}>
            <label className={classes.Label}>Удобное время</label>

            <div className={classes.Time}>
                <div className={classes.TimeItem}>
                    <Flatpickr
                        value={timeStart}
                        onChange={onChangeStart}
                        options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: 'H:i',
                            time_24hr: true,
                            minTime: '10:00',
                            maxTime: '19:00'
                        }}
                    />

                    <IconSelect />
                </div>

                <div className={classes.TimeItem}>
                    <Flatpickr
                        value={timeEnd}
                        onChange={onChangeEnd}
                        options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: 'H:i',
                            time_24hr: true,
                            maxTime: '20:00',
                            minTime: timeStart
                        }}
                    />

                    <IconSelect />
                </div>
            </div>
        </div>
    )
}

export default TimeField

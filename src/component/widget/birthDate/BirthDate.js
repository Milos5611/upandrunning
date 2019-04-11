import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import React from "react";
import {subYears} from "date-fns";

const MAX_AGE = 125;
const MIN_AGE = 13;
const BirthDate = ({onChange, value, className, disabled}) => (
    <DatePicker
        className={className}
        dropdownMode="select"
        selected={new Date(value)}
        selectsStart
        onChange={onChange}
        showYearDropdown
        dateFormatCalendar="MMMM"
        scrollableYearDropdown
        yearDropdownItemNumber={10}
        disabled={disabled}
        minDate={subYears(new Date(), MAX_AGE)}
        maxDate={subYears(new Date(), MIN_AGE)}
    />
);

BirthDate.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]),
    onChange: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default BirthDate;

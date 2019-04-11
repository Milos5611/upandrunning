import {formatDate, parseDate} from "react-day-picker/moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import PropTypes from "prop-types";
import React from "react";
import {TWO_DATE_PICKER} from "../../../common/constant";
import moment from "moment";

export default class Example extends React.Component {
    static propTypes = {
        getDataForSelectedPeriod: PropTypes.func
    };

    constructor(props){
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: undefined,
            to: undefined,
        };

    }

    handleFromChange = (from) => {
        this.setState({from});
    };

    handleToChange = (to) => {
        this.setState({to}, this.showFromMonth);
    };

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        return (
            <div className="date-range__nav">
                <span className="period">{"Period"}</span>
                <div className="InputFromTo">
                    <DayPickerInput
                        value={from}
                        placeholder="From"
                        format="LL"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                            selectedDays: [from, {from, to}],
                            disabledDays: {after: to},
                            toMonth: to,
                            modifiers,
                            numberOfMonths: 2,
                            onDayClick: () => this.to.getInput().focus(),
                        }}
                        onDayChange={this.handleFromChange}
                    />
                    {" — "}
                    <span className="InputFromTo-to">
                        <DayPickerInput
                            ref={el => (this.to = el)}
                            value={to}
                            placeholder="To"
                            format="LL"
                            formatDate={formatDate}
                            parseDate={parseDate}
                            dayPickerProps={{
                                selectedDays: [from, {from, to}],
                                disabledDays: {before: from},
                                modifiers,
                                month: from,
                                fromMonth: from,
                                numberOfMonths: 2,
                            }}
                            onDayChange={this.handleToChange}
                        />
                    </span>
                </div>
            </div>
        );
    }

    showFromMonth() {
        const {from, to} = this.state;
        if (!from) {
            return;
        }
        this.props.getDataForSelectedPeriod(this.state.from, this.state.to);
        if (moment(to).diff(moment(from), "months") < TWO_DATE_PICKER) {
            this.to.getDayPicker().showMonth(from);
        }
    }
}

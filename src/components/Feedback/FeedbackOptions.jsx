import { PropTypes } from "prop-types"
import css from "../Feedback/FeedbackOptions.module.css"

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return <div className={css.buttonWrapper}>
        {options.map(option => {
            return <button key={option} type="button" onClick={() => onLeaveFeedback(option)} className={css.optionBtn}>{option}</button>
        })}
       
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}
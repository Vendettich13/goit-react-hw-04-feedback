import { PropTypes } from "prop-types"
import css from "../Feedback/FeedbackOptions.module.css"

export const FeedbackOptions = ({ incrementGood, incrementBad, incrementNeutral }) => {
    return <div className={css.buttonWrapper}>
        <button type="button" onClick={incrementGood} className={css.optionBtn}>Good</button>
        <button type="button" onClick={incrementNeutral} className={css.optionBtn}>Neutral</button>
        <button type="button" onClick={incrementBad} className={css.optionBtn}>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    incrementGood: PropTypes.func,
    incrementBad: PropTypes.func,
    incrementNeutral: PropTypes.func,
}
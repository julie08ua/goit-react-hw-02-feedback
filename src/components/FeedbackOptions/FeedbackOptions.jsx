import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions =({options, onLeaveFeedback})=>{
    return (
        
            options.map((option, idx) => (
                <FeedbackButton
                    type='button'
                    key={idx}
                    name={option}
                    onClick={onLeaveFeedback}>
                    {option}
                </FeedbackButton>
            )))}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
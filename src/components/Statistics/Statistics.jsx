import PropTypes from 'prop-types';
import { StatisticsWrap } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsWrap>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {total ? positivePercentage : 0}%</li>
        </StatisticsWrap>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
import PropTypes from 'prop-types';
import {StatisticTitle, StatisticList, StatisticListItem} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <>
        <StatisticTitle>Statistics</StatisticTitle>
        <StatisticList>
            <StatisticListItem>
                <span>Good:{good}</span>
            </StatisticListItem>
            <StatisticListItem>
                <span>
                    Neutral:{neutral}
                </span>
            </StatisticListItem>
            <StatisticListItem>
                <span>Bad:{bad}</span>
            </StatisticListItem>
            <StatisticListItem>
                <span>Total:{total}</span>
            </StatisticListItem>
            <StatisticListItem>
                <span>Positive feedback:{percentage}%</span>
            </StatisticListItem>
        </StatisticList>
    </>
);

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
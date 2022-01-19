import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(opt => (
        <FeedbackButton
          type="button"
          key={opt}
          onClick = {() => onLeaveFeedback(opt)}
        >
          {opt}
        </FeedbackButton>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import './Filter.css';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="filter-content">
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Text may contain only letters, apostrophe, dash and spaces"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

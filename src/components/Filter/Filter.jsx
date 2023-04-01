import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <label className={css.filterItem}>
      Fliter contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;

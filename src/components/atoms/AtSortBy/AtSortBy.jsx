export const AtSortBy = ({
  label = "",
  id,
  currentValue = "",
  handleChange,
  options,
  styles = {},
}) => {
  function onChange(e) {
    const { value } = e.target;
    handleChange?.(value);
  }
  return (
    <div className="space-x-8">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        value={currentValue}
        onChange={onChange}
        className={styles.options}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

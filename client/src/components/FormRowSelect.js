const FormRowSelect = ({ labelText, name, handleChange, value, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((items, index) => {
          return (
            <option value={items} key={index}>
              {items}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;

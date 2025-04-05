
const FormInput = ({ placeholder, name, type = 'text', value, onChange, options = [] }) => {
  if (type === 'textarea') {
    return (
      <textarea
        className="form-block"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (type === 'select') {
    return (
      <select
        className="form-block"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option disabled value="">{placeholder}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    );
  }

  // default input
  return (
    <input
      className="form-block"
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;

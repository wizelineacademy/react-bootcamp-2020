export default function useFormInput(value, setValue) {
  function handleChange(e) {
    setValue(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

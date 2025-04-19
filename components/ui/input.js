export function Input({ placeholder, value, onChange, className }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border px-3 py-2 rounded ${className}`}
    />
  );
}

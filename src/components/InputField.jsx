function InputField({ label, type, value, onChange, placeholder, name }) {
  return (
    <div className="">
      <label className="block text-sm font-[500] text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-[10px] border bg-gray-50 border-gray-300  p-3 placeholder:text-sm text-sm"
      />
    </div>
  );
}

export default InputField;

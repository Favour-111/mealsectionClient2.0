function InputField({ label, type, value, onChange }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  }
  
  export default InputField;
  
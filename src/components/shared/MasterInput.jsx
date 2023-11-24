import React from "react";

const MasterInput = (
  {label,
  type = "text",
  placeholder,
  className = "",
  name,
  value,
  onChange,
  disabled = false}
) => {
  return (
    <div>
      <label className="text-base md:text-lg font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
    </div>
  );
};

export default MasterInput;
import { Select } from "antd";
import React from "react";

const MasterSelect = ({
  label,
  className = "w-full",
  size = "large",
  placeholder,
  options = [],
  onChange,
  value,
  showSearch
}) => {
  return (
    <div>
      <h2 className="text-base md:text-lg text-white font-semibold">{label}</h2>
      <Select
        onChange={onChange}
        value={value}
        className={className}
        size={size}
        showSearch={showSearch}
        placeholder={placeholder}
      >
        {options.map((opt) => (
          <Select.Option key={opt}>{opt}</Select.Option>
        ))}
      </Select>
      {/* {console.log(selectType, state.selectType)} */}
    </div>
  );
};

export default MasterSelect;

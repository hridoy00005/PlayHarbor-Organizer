import { Select } from "antd";
import React from "react";

const MasterSelect = ({
  label,
  className = "w-full",
  size = "large",
  placeholder,
  options = [],
  state,
  setState,
  selectType = "",
}) => {
  return (
    <div>
      <h2 className="text-lg text-white font-semibold">{label}</h2>
      <Select
        onChange={(value) => setState({ ...state, selectType: value })}
        value={state.selectType}
        className={className}
        size={size}
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

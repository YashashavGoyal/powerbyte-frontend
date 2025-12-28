import React from "react";

function InputControl(props) {
  return (
    <div className="flex flex-col gap-2 mb-4 text-left">
      {props.label && <label className="text-sm font-semibold text-gray-700">{props.label}</label>}
      <input
        type="text"
        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        {...props}
      />
    </div>
  );
}

export default InputControl;

import React from "react";

const MasterButton = ({
  loading,
  btnText,
  onClick,
  className,
  disabled = false,
  loadingText = "Loading...",
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span>
          <i class="fa-solid fa-spinner mr-2"></i>
          {loadingText}
        </span>
      ) : (
        btnText
      )}
    </button>
  );
};

export default MasterButton;

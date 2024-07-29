import React from "react";

type CustomButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton = ({ handleClick }: CustomButtonProps) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      type="submit"
      className="bg-transparent absolute right-4 top-4"
    >
      <svg
        height="24px"
        width="24px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
      >
        <g>
          <g id="reload">
            <g>
              <path
                fill="#808080"
                d="M22,16c0,4.41-3.586,8-8,8s-8-3.59-8-8s3.586-8,8-8l2.359,0.027l-1.164,1.164l2.828,2.828
                            L24.035,6l-6.012-6l-2.828,2.828L16.375,4H14C7.375,4,2,9.371,2,16s5.375,12,12,12s12-5.371,12-12H22z"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default CustomButton;

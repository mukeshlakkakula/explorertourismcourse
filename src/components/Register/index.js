import React from "react";
import { useState } from "react";
import "./index.css";
const Register = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className={`shaking-container  outerRegisterContainer ${
          isHovered ? "paused" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <a className="content" href="https://explorerscompany.in/">
            <span className="">
              <span className="">
                Launch Your Own Tourism Business with{" "}
                <font size="-1">
                  (Only <s>Rs 2000</s>{" "}
                  <span className={` ${isHovered ? "spn" : ""}`}>Rs 99/-</span>{" "}
                  )
                </font>{" "}
                Investment
                <br />
              </span>
            </span>
          </a>
        </div>
      </div>{" "}
    </div>
  );
};
//   <div>
//     <div
//       className=""
//       class="shaking-container"
//       onmouseover="stopAnimation(this)"
//       onmouseout="startAnimation(this)"
//     >

//     </div>
//   </div>
// );

export default Register;

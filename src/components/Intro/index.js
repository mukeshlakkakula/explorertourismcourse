import React from "react";
import "./index.css";
const Intro = () => {
  const Intro = (
    <div className="introFullContainer">
      <div className="intro99Container">
        <p className="para01">
          Learn Tourism Business at Just{" "}
          <span className="text-danger">Rs. 99</span>
        </p>
      </div>
      <div className="introInnerContainer">
        <div>
          <img
            className="img001"
            src="https://s3-alpha-sig.figma.com/img/0713/7fe3/40bcaa4b3a698cc56266b184000a4af4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWP3b0gvx~W1XWupJJloueBOal6JuTl9WFaKZQAYaHeOPza7LzzSuEWG~azxD1kidKxJa2Bc~Env-pCrGgmOwUQj4k0AXKpivOZWYESJ18iJ86-2UgHtEfVsZOsS5vMnHDnBkYv7pYmzxRBEjehgS8Qg~ByJXvyPXt-Z334WC6dAdxVyTS1H6p7y3slC4OGDWUU9rrA6ClH418vItrr9yFal2eznPMxLN~84vgHZ3R~eF93rOohDWGYPuBj29IzSAGoCphVA0duh8QAZDF6kIctzyeJtthUm1CFZMtEG~hVW3dau2k~MtMcKV8kQRNkhY4uhBB95PeSLkNQoqknGjw__"
            alt="img01"
          />
        </div>
        <div className="unLockTextContainer">
          <p>
            Unlock the secrets of the tourism industry and learn how to build
            your own travel business for just.
          </p>

          <div className="d-flex justify-content-center">
            <button type="button" className="btn01">
              Rs.99/-
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{Intro}</div>;
};

export default Intro;

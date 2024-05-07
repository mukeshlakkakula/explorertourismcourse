import React from "react";
import "./index.css";
const WhyLearn = () => {
  const whyLearn = (
    <div className="whyTopconntainer">
      <div className="whyHeadingListContainer">
        <h1 className="pb-3">Why Learn Tourism Business?</h1>
        <ul>
          <li className="pb-2 fs-3">
            Discover the immense potential of the tourism industry.
          </li>
          <li className="pb-2 fs-3">
            Explore various opportunities for entrepreneurship in travel and
            tourism
          </li>
          <li className="pb-2 fs-3">
            Gain insights into the growing trends and demands in the travel
            market
          </li>
        </ul>
      </div>

      <img
        className="img002"
        src="https://s3-alpha-sig.figma.com/img/de2f/666b/ba745509fa86bbea4d92d4d22d047701?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMOCJSEfZcMG3oo76hgJuvfG0Wv6D7~1tHTMACuOgiDxbHEZF4QU4Y-CJdaQtgv-D3nDn-i0CnhqHMHsAm~1ra6oQirabDd4yho6XBYb6nG9KTdZGADxXfYssIbOGYUYbFe8aWkY32yquiAyJ~V5hLZFFV2P80qL7~Lm9zQyKmR--FOIQK8JzwOWFldR268GkAy0YJpJaJgWAk5JojG65WWYCzdTozHbaw20V-2MP2Y3oepVSQm5XoU-NXuvi07w6va5OTG5bInlg~tjS0KklUoZzS0FXz3QD2sI~juPamMHM~cHUFPZgn562SjekYJrlMBAdLtQ3BVSJJPZ2ygf3w__"
        alt="whyImage"
      />
    </div>
  );
  return <div className="whyFullContainer">{whyLearn}</div>;
};

export default WhyLearn;

import React from "react";
import "./index.css";
const WhatLearn = () => {
  const whatLearn = (
    <div className="whatOutContainer">
      <h1>What You'll Learn:</h1>
      <div className="whatinContainer">
        <h2 className="fs-2 text-primary">
          1.Understanding the Tourism Industry:
        </h2>
        <div className="containerOuter">
          <div className="containnerone ">
            <ul>
              <li className="fs-3">
                Overview of the tourism sector and its significance.
              </li>
              <li className="fs-3">
                Different types of tourism (e.g., leisure, business, adventure).
              </li>
              <li className="fs-3">
                Identifying target markets and customer segments.
              </li>
            </ul>
          </div>
          <div>
            <div className="imageContainer">
              <img
                className="w-100"
                src="https://s3-alpha-sig.figma.com/img/62e8/06fe/fd8beb000f4f798681914717fc679103?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHFgqURtvpCCf2lsdEPGaTDNXaD1zFiBOsggCAxV9ydUXkF3lSDfU5wwbFPbhTBXi7N~W7sTDjg3FyHPl7ziWCrpRb4K6KlUu9ELJuQXQ0jIm6PpEX5V6Yse-wv8vrPfkEUXwH75~o28F9-cKKzwMJz46t35DM0MKFDl4SnpsVBcSbOfoDXy7RVnH9kD27C1OchX1bHT7JKFPLA0TmQYrOfmsruqNn1VO6--7WZLEE~X6fnpwbQYPY2WHDaifu~fT3QFhSxvmyAxkajbOLgEDShe2VrkCSjCZ2OV2vzs97wBwLW7KOWyv5Aq3y~kk5l2Iihih0X5nBcNdQHkdQjBVw__"
                alt="whatimg001"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="whatinContainer">
        <h2 className="fs-2 text-primary d-flex justify-content-end">
          2.Essentials of Tourism Management:
        </h2>
        <div className="containerOuter">
          <div>
            <div className="imageContainer001">
              <img
                className="w-100 img0001 "
                src="https://s3-alpha-sig.figma.com/img/44b8/0fd1/dfd6882c28e2434d0c7a7a59f0e39216?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBGPXubaNCe1hdvBFVdXqWxftbl-C7KMMjorykZkYsX9mTYq9goIx-z8~spS94ZaUvkguRNCSLAECmVdLj9n6Ak16If6fNLYCNM6izt8pLS6IkD~rw-PECA-FbNw6W-lUvusjeEJwPN8g7Lt8As5TyYv4Z6W4OiYg-gq4q~FXwaAldFwyTIZLTgsmUBWhabBOGCvY0wx6y0FVk3~5TE7iLkeGxUfW8T~nr0SDEXR0z4H78~g7PkUzhTMurOTw2lYjXSdvxuVHPJIY3fHM-mmlniuD6QVqyOQT3GOovBx1AkBDKBbKVnDvMm38wbpo-fpMBuIBgNetOdDygmszTBuCw__"
                alt="whatimg001"
              />
            </div>
          </div>
          <div className="containnerone ">
            <ul>
              <li className="fs-3">
                Basics of tour planning and itinerary development.
              </li>
              <li className="fs-3">
                Customer service and relationship management in tourism.
              </li>
              <li className="fs-3">
                Managing logistics and operations effectively
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="whatinContainer">
        <h2 className="fs-2 text-primary">
          3.Financial Management in Tourism:
        </h2>
        <div className="containerOuter">
          <div className="containnerone ">
            <ul>
              <li className="fs-3">
                Budgeting and cost control for tourism ventures.
              </li>
              <li className="fs-3">
                Pricing strategies and revenue optimization.
              </li>
              <li className="fs-3">
                Financial planning for sustainable growth.
              </li>
            </ul>
          </div>
          <div>
            <div className="imageContainer001">
              <img
                className="w-100 img0001 "
                src="https://s3-alpha-sig.figma.com/img/1df4/4c18/7d305241a2163e8cb9c43ab431677214?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESfxB4KKRdttiWnjZjCbQ6SFTMg7UOcsK0qoDSrsUKtcRgOg7pTL6r6fwCSwjO0uVD-ECqXWTwmm~ap8z0uxoXcEIOgkf~hh90gm-AirKD~vv3bgRNUa7upIVcBI7-bjyBgZx7VXyI307ZUbgN1xMgpDofQgRBl5QZy4jL180Xo0OnBz8fe6bmw9AT8i7N18nT7RX9wAXyk~mTA4L2DDqGzl8IxS~4Nlw9WTUuUemq0RKiOaeZWKTc0Ww~kDBvy8psJX9gWy5fFaVobc5RDiVB28ff-5a3QNwblM03nNx72n191epMXYI2LFfkaOzKgLmMwjrYkVsgZCaMB2CipN-Q__"
                alt="whatimg001"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div className="whatFullContainer">{whatLearn}</div>;
};

export default WhatLearn;

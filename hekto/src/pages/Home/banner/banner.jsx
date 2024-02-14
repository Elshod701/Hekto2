import React from "react";
import data from "../../../data/banner-data/banner";

export default function Banner() {
  return (
    <>
      <div>
        <div>
          <div>
            <p>
              {data.map((item) => (
                <li>{item.text}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

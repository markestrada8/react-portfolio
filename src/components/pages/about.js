import React from "react";
import profilePic from "../../../static/assets/images/bio/new-profile.jpg";

export default function () {
  return (
    <div className="content-page-container">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at
          volutpat diam ut. Sit amet justo donec enim diam vulputate ut pharetra
          sit. Nibh venenatis cras sed felis eget velit. Sit amet massa vitae
          tortor condimentum lacinia quis vel eros. Elit eget gravida cum sociis
          natoque penatibus et magnis. Quis enim lobortis scelerisque fermentum
          dui faucibus. Ac tortor vitae purus faucibus. Nulla pharetra diam sit
          amet nisl suscipit adipiscing bibendum est. Aenean euismod elementum
          nisi quis eleifend quam adipiscing vitae proin. Faucibus a
          pellentesque sit amet porttitor. Sem integer vitae justo eget.
        </p>
        <p>
          Est lorem ipsum dolor sit amet consectetur adipiscing elit
          pellentesque. Diam sollicitudin tempor id eu nisl nunc. Feugiat
          vivamus at augue eget. Nisi vitae suscipit tellus mauris a. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis. Commodo sed
          egestas egestas fringilla phasellus. Eget magna fermentum iaculis eu
          non diam. Euismod elementum nisi quis eleifend quam adipiscing vitae
          proin sagittis. Eget lorem dolor sed viverra ipsum nunc aliquet. Purus
          in massa tempor nec feugiat nisl. Quis hendrerit dolor magna eget est
          lorem ipsum dolor sit. Ultricies mi quis hendrerit dolor magna. Leo
          duis ut diam quam nulla porttitor. Viverra adipiscing at in tellus
          integer. Sed arcu non odio euismod lacinia at quis risus. Nisl vel
          pretium lectus quam. Porttitor eget dolor morbi non. Lacus sed viverra
          tellus in hac habitasse platea dictumst vestibulum. Faucibus pulvinar
          elementum integer enim neque.
        </p>
      </div>
    </div>
  );
}

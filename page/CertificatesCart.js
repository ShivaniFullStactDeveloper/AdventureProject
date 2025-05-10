import React from "react";
import "../style/certificates-cart.css";
import certificateData from "./certificateData";

const CertificatesCart = () => {
    return (
      <div className="certificate-wrapper">
        {certificateData.map(({ id, alert, image }) => (
          <div className="certificate-card" key={id}>
            <img src={image} alt={alert} />
          </div>
        ))}
      </div>
    );
  }

  export default CertificatesCart;

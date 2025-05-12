import React, { useState } from "react";
import '../../styles/certificate_style/CertificatePage.css';
import SearchBar from "../certificate/SearchBar";
import certificateData from "../certificate/CertificateData";
import CertificatesCart from "../certificate/CertificatesCart";
import Sidebar from "../../common/header/Sidebar";

const CertificatePage = () => {
  const [filteredCertificates, setFilteredCertificates] = useState(certificateData);

  return (

    <div>
      <h2 className="certificate-heading">Certificates</h2>
      <div className="underline-one"></div>
      <div className="underline-one underline-two"></div>

      {/* Search bar */}
      <SearchBar setFilteredCertificates={setFilteredCertificates} />

      {/* Certificate grid */}
      <CertificatesCart filteredCertificates={filteredCertificates} />
    </div>

  );
};

export default CertificatePage;
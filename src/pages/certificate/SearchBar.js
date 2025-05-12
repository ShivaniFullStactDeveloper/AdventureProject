import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import '../../styles/certificate_style/SearchBar.css';
import certificateData from "../certificate/CertificateData";




const SearchBar = ({ setFilteredCertificates }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filter certificates based on search term (using certificate ID)
    if (value.trim() === "") {
      setFilteredCertificates(certificateData);
    } else {
      const filtered = certificateData.filter((certificate) => {
        const certificateId = certificate.image.split("/").pop().split(".")[0];
        return certificateId.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredCertificates(filtered);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <button className="btn-search" type="button">
          <FaSearch />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Search Certificates..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
import Heading from "../common/Heading"
import "../style/certificate-page.css";
import Certificates from "./CertificatesCart";
import SearchBar from "../page/SearchBar";
import CertificatesCart from "./CertificatesCart";

const CertificatePage = () => {
  
    return(
        <>
        <Heading level = {2} className="certificate-heading">Certificates</Heading>
        <div className="underline-one"></div>
        <div className="underline-one underline-two"></div>
        {/* Search bar start */}
          <SearchBar/>
          {/* Search bar end */}

          {/* Certificate cart start */}
          <CertificatesCart/>
        </>
    )
  };
export default CertificatePage;

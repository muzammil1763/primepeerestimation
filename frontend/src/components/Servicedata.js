import React from "react";
import { useParams,Link } from "react-router-dom";
import service from "./service";
function Servicesdata() {
  const { id } = useParams();
  const r = service.find((s) => s.id == id);
  return (
    <>
      <section>
        <div className="servicedata">
          <div
            className="service-images"
            style={{
              backgroundImage: `url(${r.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100vw",
              height: "60vh",
              objectFit: "cover",
            }}
          >
            <h1>{r.name}</h1>
          </div>
          <div className="service-content">
            <h3>Welcome</h3>
            <p>
              At Prime Peer Estimation, we offer high-quality cost estimating
              and take-off services to meet the unique needs of our clients. Our
              team of experienced and professional estimators uses
              state-of-the-art technology and industry-leading software to
              provide accurate and reliable cost estimates.
            </p>
            <h3>Our Estimating & Take-off Services Include</h3>
            <p>{r.content}</p>
            <h3>Why Choose Us</h3>
            <ul>
              <li>
                <b>Accuracy: </b>Our team is skilled in conducting thorough
                analysis and research to provide highly accurate cost
                estimations, ensuring your project stays within budget.
              </li>
              <li>
                <b>Efficiency: </b>We understand the importance of time in the.
                That’s why we strive to deliver our services promptly without
                compromising quality or attention to detail.
              </li>
              <li>
                <b>Expertise: </b>With our extensive knowledge and experience in
                , we have successfully served a diverse range of business.
              </li>
              <li>
                <b>Client-First Approach: </b>Client satisfaction is at the
                heart of everything we do. We listen to your requirements,
                provide customized solutions, and maintain open communication to
                ensure your needs are met throughout the estimation process.
              </li>
            </ul>
            <h3>Get in Touch</h3>
            <p>
              If you’re looking for reliable and accurate estimating & Take-off
              services, we are here to help. Contact us today to discuss your
              project requirements and receive a personalized quote. Let us
              assist you in achieving your commercial project goals while
              managing costs effectively.
            </p>
            <div className="service-b">
              <Link to={"/contact"}>
                <button className="service-button">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Servicesdata;

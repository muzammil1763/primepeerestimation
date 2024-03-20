import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
// import service from "./service";

function Services() {
     const { id } = useParams();
     const [users, setUsers] = useState([]);

     useEffect(() => {
       axios
         .get("http://localhost:4000/services")
         .then((res) => {
           setUsers(res.data);
         })
         .catch((err) => {
           console.error(err);
         });
     });

  return (
    <>
      <section>
        <div className="service">
          <div className="s1">
            <h1>SERVICES</h1>
            <div className="service-cards">
              {users.map((s) => {
                return (
                  <>
                    <div className="service-card">
                      <img src={s.image} alt="" />
                      <h3>{s.name}</h3>
                      <Link to={`/${s.id}`}>
                        <button>Click</button>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;

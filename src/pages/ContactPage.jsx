import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
             <p className="lead text-center">
          olayayoussefi9999@gmail.com
                                 
           
        </p>
               <p className="lead text-center">
          0666666666
        </p>
               <p className="lead text-center">
                Adresse : Maroc ,Oujad ,   hay aljaouhara rue 20
        </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

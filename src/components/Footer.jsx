import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <section class="">
          <footer class="text-center text-white" style={{ backgroundColor: "#1a1a1a" }}>
            <div class="container p-4 pb-0">
              <section class="">
                <p class="d-flex justify-content-center align-items-center">

                  <p class="footer">
                    Get the IMDb AppHelpSite IndexIMDbProBox <br></br>
                    Office Mojo IMDb Developer <br></br>
                    AdvertisingJobsConditions of Use  Privacy Policy<br></br>

                  </p>
                </p>
              </section>
            </div>

            <div class="text-center p-3" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
              An Amazon Company
              {/* <a class="text-white" href="https://mdbootstrap.com/">1990-2023 by IMDb.com, Inc</a> */}
              <p>©1990-2023 by IMDb.com, Inc</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Footer;

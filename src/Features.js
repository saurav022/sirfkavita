import React from "react";

const Features = () => {
  const handleClick_Insta = () => {
  window.open("https://www.instagram.com/sirf_kavita", "_blank"); // Opens link in a new tab
};
const handleClick_Feedback = () => {
  window.open("https://forms.gle/suraLXDrvsZjyM4Q9", "_blank"); // Opens link in a new tab
};
const handleClick_JoinUs = () => {
  window.open("https://forms.gle/F2xR6aiZ33S5Foyr7", "_blank"); // Opens link in a new tab
};
  return (
    <section className="features">
      <div className="card">
    <h3><i class="fa-brands fa-whatsapp"></i>&nbsp; Whatsapp</h3>
    <p>9204248351</p>
  </div>
      <div className="card" onClick={handleClick_Insta} style={{ cursor: "pointer" }}>
        <h3 ><i class="fa-brands fa-instagram"></i>&nbsp;Instagram</h3>
        <p>@sirf_kavita</p>
      </div>
      <div className="card" onClick={handleClick_JoinUs} style={{ cursor: "pointer" }}>
        <h3 ><i class="fa-solid fa-handshake"></i>&nbsp;Join Us</h3>
        <p></p>
      </div>
       <div className="card" onClick={handleClick_Feedback} style={{ cursor: "pointer" }}>
        <h3 ><i class="fa-solid fa-comment"></i>&nbsp;Feedback</h3>
        <p></p>
      </div>
    </section>
  );
};

export default Features;

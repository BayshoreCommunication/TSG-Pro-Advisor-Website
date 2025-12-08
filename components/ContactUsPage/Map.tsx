import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[550px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.2582667277976!2d-82.36570172457253!3d27.94409121667968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c66dcb84253b%3A0xf20b238e479ca08d!2s1211%20Tech%20Blvd%20Suite%20120%2C%20Tampa%2C%20FL%2033619%2C%20USA!5e0!3m2!1sen!2sus!4v1733658400000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

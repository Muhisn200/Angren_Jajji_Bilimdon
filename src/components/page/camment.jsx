import React from 'react';
import Iframe from 'react-iframe';
import "./camment.css"
const MyMapComponent = () => {
    return (
        <div className="map01" >
        <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1698296523127!2d70.06869746243024!3d41.021540282294914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9f27abd0e5d%3A0x5939ad18fc2dd1fd!2s%22JAJJI%20BILIMDON%22%20bog&#39;chasi!5e0!3m2!1sen!2s!4v1717530634831!5m2!1sen!2s"
display={"none"}
            styles={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" className={"maps"}
        />

        </div>
    );
};

export default MyMapComponent;

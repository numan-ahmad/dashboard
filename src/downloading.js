import React from 'react';

const Downloading = () =>{
 return(
    <div className="downloading_part">
        <div className="blue_section">
        <i class="fa fa-cloud-download"></i>
        <h3 className="downloading">Downloading File</h3>
        <h4 className="percentage">75%</h4>
        <p className="remaining">10 min remaining</p>
        </div>
    </div>
 )
};

export default Downloading ;
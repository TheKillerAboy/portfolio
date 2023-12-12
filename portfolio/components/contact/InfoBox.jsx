import React from 'react';
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', 'ml-30', className)}>
            <ul>
                <li>
                    <h5 className="title-block mb-15">Contact</h5>
                    <p className="text-p ">+27 (68) 506 7378</p>
                    <div className="over-hidden mt-5">
                        <a className="link-hover" data-hover-text="annekin001@gmail.com"
                           href="#">annekin001@gmail.com</a>
                    </div>

                </li>
                <li>
                    <h5 className="title-block mb-15">Check me out</h5>
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Github." href="https://github.com/TheKillerAboy"
                           target="_blank" rel="nofollow">Github.</a>
                    </div>
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Linkedin." href="https://www.linkedin.com/in/annekin-meyburgh-535662199/"
                           target="_blank" rel="nofollow">Linkedin.</a>
                    </div>
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Codeforces." href="https://codeforces.com/profile/AMeyburgh"
                           target="_blank" rel="nofollow">Codeforces.</a>
                    </div>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;
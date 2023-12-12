import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {dsnCN} from "../../hooks/helper";


const socialData = [
    {name: "Linkedin.", icon: faLinkedin, link: "https://github.com/TheKillerAboy"},
    {name: "Github.", icon:faGithub, link: "https://www.linkedin.com/in/annekin-meyburgh-535662199/"},
    {name: "Codeforces.", icon: faChartSimple, link: "https://codeforces.com/profile/AMeyburgh"},
];


function SocialOne({className="" , ...restProps}) {
    return (
        <div className={dsnCN("social-side social-network d-flex align-items-center" , className)} {...restProps}>
            <div className="icon" data-dsn="parallax">
                <FontAwesomeIcon icon={faShareAlt}/>
            </div>
            <ul className="socials d-flex flex-column p-absolute ">
                {socialData && socialData.map(($item, number) => <li key={number} style={{"--dsn-index-animate":socialData.length - number -1}}>
                    <a href={$item.link} target="_blank">
                        <FontAwesomeIcon icon={$item.icon}/>
                        <span>{$item.name}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    );
}


export default SocialOne;
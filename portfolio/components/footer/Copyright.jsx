import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © <a  className="link-hover" data-hover-text="Source Code" target="_blank" href="https://github.com/TheKillerAboy/portfolio">Made by Annekin Meyburgh</a>
        </h5>
    );
}


export default Copyright;
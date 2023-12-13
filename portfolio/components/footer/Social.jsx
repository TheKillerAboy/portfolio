import {dsnCN} from "../../hooks/helper";


const socialContent = [
    {name: "Linkedin.", href: "https://www.linkedin.com/in/annekin-meyburgh-535662199/"},
    {name: "Github.", href: "https://github.com/TheKillerAboy"},
    {name: "Codeforces.", href: "https://codeforces.com/profile/AMeyburgh"},
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a className="link-hover" href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Social;
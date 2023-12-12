import {dsnCN} from "../../hooks/helper";
import Button from "../button/Button";
import BgDot from "../header/BgDot";
import { useRouter } from 'next/router'

const NextContent = {
    title: "Would you like more information \nor do you have a question?",
    subtitle: `Don't be weird.`,
    buttonText: "Contact Me"
};

function NextPage({className, ...restProps}) {

    const router = useRouter()

    return (
        <section className={dsnCN("next-page p-relative d-flex align-items-center", className)}
                 {...restProps}
        >
            <BgDot/>
            <BgDot rightPosition/>
            <div className="container w-100">
                <div className="c-wrapper d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="sub-heading line-shape line-shape-after ">
                            <span className="line-bg-left">{NextContent.subtitle}</span>
                        </p>
                        <h2 className="section-title max-w750 mt-15">
                            {NextContent.title}
                        </h2>
                    </div>

                    <div className="button-box d-flex justify-content-end align-items-center">
                        <Button
                            href="#"
                            onClick={()=>{
                                if(
                                    window
                                        .getComputedStyle(
                                            document.body.getElementsByClassName('contact-btn')[0]
                                        )
                                        .display === "none"
                                ){
                                    router.push('/contact')
                                } else{
                                    document.body.classList.toggle("dsn-show-contact")
                                }
                            }}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                        >
                            {NextContent.buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextPage;

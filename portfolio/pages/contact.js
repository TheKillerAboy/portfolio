import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Layout from "../layout/Layout";
import Footer from "../components/footer/Footer";

export default function Contact(){
    return <Layout>
        <Head>
            <title>Contact | Annekin Meyburgh</title>
        </Head>
        <ModalContact/>
        <Footer className="background-section"/>
    </Layout>
}
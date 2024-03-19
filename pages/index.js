import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/HeaderSection";
import InfoCard from "@/components/InfoCard";
import AboutSection from "@/components/AboutSection";
import OurWorkSection from "@/components/OurWorkSection";
import OrderSection from "@/components/OrderSection";
import FooterSection from "@/components/FooterSection";
export default  function Home(){
    return(
        <main>
            <HeaderSection>
                <Layout>
                    <Navigation/>
                    <InfoCard/>
                </Layout>
            </HeaderSection>
                <Layout>
                    <AboutSection/>
                    <OurWorkSection/>
                    <OrderSection/>
                    <FooterSection/>
                </Layout>
        </main>
    )
}


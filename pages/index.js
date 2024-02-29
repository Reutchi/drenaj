import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/HeaderSection";
import InfoCard from "@/components/InfoCard";
export default  function Home(){
    return(
        <main>
            <HeaderSection>
                <Layout>
                    <Navigation/>
                    <InfoCard/>
                </Layout>
            </HeaderSection>
        </main>
    )
}


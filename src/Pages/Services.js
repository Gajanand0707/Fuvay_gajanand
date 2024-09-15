import ServicesBenner from '../ServicesComponents/ServicesBenner/ServicesBenner'
import MaindProjcet from '../ServicesComponents/MaindProjcet/MaindProjcet'
import PriceTable from '../ServicesComponents/PriceTable/PriceTable'
import MarqueeServices from '../ServicesComponents/marquee/Marquee'
import Footer from '../Footer/Footer'
function Services() {
    return (
        <>

            <ServicesBenner />
            <MaindProjcet />
            <PriceTable />
            <MarqueeServices />
            <Footer />
        </>
    )
}
export default Services;
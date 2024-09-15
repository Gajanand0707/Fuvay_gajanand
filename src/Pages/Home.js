import Benner from "../Components/Benner/Benner";
import Customers from "../Components/Customers/Customers";
import Logosmove from "../Components/Logosmove/Logosmove";
import Studies from "../Components/Tabs/Tabs";
import Works from "../Components/Works/Works";
import Footer from "../Footer/Footer";
import '../Commen/Commen.css'

function Home() {
    return (
        <>
            <div className="bler-bg">
                <Benner />
                <Logosmove />
                <Works />
            </div>
            <Studies />
            <Customers />
            <Footer />
        </>
    )

}

export default Home;
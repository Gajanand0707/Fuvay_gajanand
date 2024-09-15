import '../../Commen/Commen.css'
import { BiChevronDown } from "react-icons/bi";
import Service from '../../Imgs/Services.svg'
function Service2benner() {
    return (
        <>
            <div className='Page-Benner text-center'>
                <div className='container-main'>
                    <img src={Service} alt='text-img' />
                    <h1 className='mb-4'>Service Detail</h1>
                    <h2 className='mb-4'>Creative Web & Digital Agency</h2>
                    <p className='mb-4 mx-auto'>A lump sum is a single payment of money, as opposed to a series of payments made over time (such as an annuity).</p>
                    <BiChevronDown />
                </div>
            </div>
        </>
    )
}
export default Service2benner
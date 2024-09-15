import './Serviceour.css'
function Formsec() {
    return (
        <>
            <div className="contect-ser">
                <form>
                    <h5 className="Fuvay-h2 mb-4">Get a Quote</h5>
                    <input className='w-100 mb-4' type="text" name="name" name="Your Name" placeholder="Your Name" />
                    <input className='w-100 mb-4' type="email" name="email" placeholder="Your Email" />
                    <input className='w-100 mb-4' type="number" name="number" placeholder="Your Phone" />
                    <textarea className='w-100 mb-4' placeholder="Message" />
                    <button type='submit' className="button-main">Contact Us</button>
                </form>
            </div>
        </>
    )
}
export default Formsec
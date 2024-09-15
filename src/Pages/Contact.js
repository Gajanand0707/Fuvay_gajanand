import {
    useState, useEffect
} from 'react'
function Contact() {
    const [Prodect, setProdect] = useState([])
    useEffect(() => {
        const fetchProdect = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            setProdect(data)
            console.log(data)
        }
        fetchProdect()

    }, [])
    return (
        <>
            {Prodect.map((Prodects) => (
                <div className="Prodect-items" key={Prodects.id}>
                    <h6>{Prodects.title}</h6    >
                </div>
            ))}
        </>
    );
}

export default Contact;

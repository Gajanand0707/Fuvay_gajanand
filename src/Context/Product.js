import { useContext } from 'react';
import Notecontext from './Notecontext';

function Product() {
    const AllProduct = useContext(Notecontext);


    return (
        <div className="Product pb-5">
            <div className="container">
                <div className="row justify-content-center gap-3">
                    {AllProduct.map((product) => (
                        <div className="col-md-3 p-0" key={product.id}>
                            <div className="card h-100 p-4">
                                <img src={product.image} style={{ height: "300px" }} alt="Product" />
                                <p className="mt-3">{product.title}</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;

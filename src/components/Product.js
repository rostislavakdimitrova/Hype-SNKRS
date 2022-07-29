import { Link } from 'react-router-dom';

export const Product = (props) => {
    return (
        
        <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
        {/*<!-- Product Image -->*/}
            <div className="product-img">
                <img src="img/product-img/product-1.jpg" alt="" />
                <div className="product-quicview">
                    <Link to="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></Link>
                </div>
            </div>
        {/*<!-- Product Description -->*/}
            <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
            {/*<!-- Add to Cart -->*/}
                    <Link to="#" className="add-to-cart-btn">ADD TO CART</Link>
            </div>
        </div>
    );
};
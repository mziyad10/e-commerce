import { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    
    const {addToCart} = useContext(ShopContext);

    const {product} = props;
    

  return (
    <div className='productdisplay'>
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="h" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
         <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
    </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">{product.currency === "INR" ? "₹" : "$"}{product.old_price}</div>
            <div className="productdisplay-right-price-new">{product.currency === "INR" ? "₹" : "$"}{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{
            addToCart(props.id)
            }}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
    </div>

    </div>
  )
}

export default ProductDisplay

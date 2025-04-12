import { useSelector } from "react-redux";
import './Orders.css';  

function Orders() {
    const orders = useSelector(state => state.purchasedetails);

    const orderItems = orders.map((item, index) => (
        <li key={index} className="order-item">
            <div className="order-header">
                <strong>{item.name}</strong>
                <span className="order-price">₹{item.totalAmount}</span>
            </div>
            <span className="order-date">Date of Order: {item.date}</span>
            
            <ul className="order-products">
                {item.items.map((product, productIndex) => (
                    <li key={productIndex} className="order-product">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/50'} 
                        />
                        <div className="product-details">
                            <strong>{product.name}</strong>  
                            <span>₹{product.price} x {product.quantity}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </li>
    ));

    return (
        <div className="orders-container">
            <h1 className="orders-title">Purchase History</h1>
            {orders.length === 0 ? (
                <h1 className="no-purchase-history">No purchase history available.</h1>
            ) : (
                <ul className="order-list">{orderItems}</ul>
            )}
        </div>
    );
}

export default Orders;

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import './Veg.css'; 

function Veg() {
    const dispatch = useDispatch();
    const vegItems = useSelector((state) => state.products.veg);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const perPageItem = 9;

    const priceRanges = [
        { label: "₹0 - ₹100", min: 0, max: 100 },
        { label: "₹100 - ₹200", min: 100, max: 200 },
        { label: "₹200 - ₹350", min: 200, max: 350 },
        { label: "₹350 - ₹600", min: 350, max: 600 }
    ];

    const handlePriceChange = (label) => {
        setSelectedPrices(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    const filteredItems = vegItems
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(item => {
            if (selectedPrices.length === 0) return true;
            return priceRanges.some(
                range =>
                    selectedPrices.includes(range.label) &&
                    item.price >= range.min &&
                    item.price <= range.max
            );
        });

    const totalPages = Math.ceil(filteredItems.length / perPageItem);
    const pageStartIndex = (pageNumber - 1) * perPageItem;
    const currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPageItem);

    const handlePage = (page) => {
        if (page >= 1 && page <= totalPages) setPageNumber(page);
    };

    return (
        <div className="veg-container">
            <h1 className="veg-title">Fresh Veg Items</h1>

            <input
                type="text"
                className="search-bar"
                placeholder="🔍 Search for vegetables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="price-filters">
                <h3>Filter by Price:</h3>
                {priceRanges.map((range, index) => (
                    <label key={index} className="price-checkbox">
                        <input
                            type="checkbox"
                            checked={selectedPrices.includes(range.label)}
                            onChange={() => handlePriceChange(range.label)}
                        />
                        <span>{range.label}</span>
                    </label>
                ))}
            </div>

            <div className="veg-items">
                {currentItems.map((item, index) => (
                    <div key={index} className="veg-card">
                        <img src={item.image} alt={item.name} className="veg-image" />
                        <div className="veg-info">
                            <span className="veg-name">{item.name}</span>
                            <span className="veg-price">₹{item.price}</span>
                        </div>
                        <button
                            onClick={() => dispatch(addToCart(item))}
                            className="add-to-cart-btn"
                        >
                            🛒 Add To Cart
                        </button>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={() => handlePage(pageNumber - 1)} disabled={pageNumber === 1}>
                        ← Prev
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePage(index + 1)}
                            className={pageNumber === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePage(pageNumber + 1)} disabled={pageNumber === totalPages}>
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
}

export default Veg;

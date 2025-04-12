import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import './Sweet.css';

function Sweet() {
    const dispatch = useDispatch();
    const sweetItems = useSelector((state) => state.products.Sweets);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const perPageItem = 12;

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
        setPageNumber(1);
    };

    const filteredItems = sweetItems
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(item => {
            if (selectedPrices.length === 0) return true;
            return selectedPrices.some(label => {
                const range = priceRanges.find(range => range.label === label);
                return range && item.price >= range.min && item.price <= range.max;
            });
        });

    const totalPages = Math.ceil(filteredItems.length / perPageItem);
    const pageStartIndex = (pageNumber - 1) * perPageItem;
    const currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPageItem);

    const handlePage = (page) => {
        if (page >= 1 && page <= totalPages) setPageNumber(page);
    };

    return (
        <div className="sweet-container">
            <h1 className="sweet-title">Delicious Sweets</h1>

            <input
                type="text"
                className="search-bar"
                placeholder="🔍 Search for sweets..."
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

            <div className="sweet-items">
                {currentItems.map((item, index) => (
                    <div key={index} className="sweet-card">
                        <img src={item.image} alt={item.name} className="sweet-image" />
                        <div className="sweet-info">
                            <span className="sweet-name">{item.name}</span>
                            <span className="sweet-price">₹{item.price}</span>
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

export default Sweet;

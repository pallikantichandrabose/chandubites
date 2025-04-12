import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import './NonVeg.css';

function NonVeg() {
    const dispatch = useDispatch();
    const nonVegItems = useSelector((state) => state.products.nonVeg);

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

    // Handles the change of selected price filter checkboxes
    const handlePriceChange = (label) => {
        setSelectedPrices(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label) // Remove label if it's already selected
                : [...prev, label] // Add label if it's not selected
        );
    };

    // Filtering the items based on search term and selected price ranges
    const filteredItems = nonVegItems
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(item => {
            // If no price filter is selected, include all items
            if (selectedPrices.length === 0) return true;

            // Check if the item's price falls within any of the selected price ranges
            return selectedPrices.some(label => {
                const range = priceRanges.find(range => range.label === label);
                return range && item.price >= range.min && item.price <= range.max;
            });
        });

    const totalPages = Math.ceil(filteredItems.length / perPageItem);
    const pageStartIndex = (pageNumber - 1) * perPageItem;
    const currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPageItem);

    // Handles page navigation
    const handlePage = (page) => {
        if (page >= 1 && page <= totalPages) setPageNumber(page);
    };

    return (
        <div className="nonveg-container">
            <h1 className="nonveg-title">Fresh Non-Veg Items</h1>

            {/* Search bar to filter items */}
            <input
                type="text"
                className="search-bar"
                placeholder="🔍 Search for non-vegetarian items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Price filter checkboxes */}
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

            {/* Displaying filtered non-veg items */}
            <div className="nonveg-items">
                {currentItems.map((item, index) => (
                    <div key={index} className="nonveg-card">
                        <img src={item.image} alt={item.name} className="nonveg-image" />
                        <div className="nonveg-info">
                            <span className="nonveg-name">{item.name}</span>
                            <span className="nonveg-price">₹{item.price}</span>
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

            {/* Pagination controls */}
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

export default NonVeg;

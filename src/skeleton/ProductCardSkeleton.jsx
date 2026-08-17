import "../CSS/Product.css";
import "../CSS/Skeleton.css";

function ProductCardSkeleton() {
    return (
        <div className="card skeleton-card">

            <div className="skeleton skeleton-heart"></div>
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-category"></div>
            <div className="skeleton skeleton-price"></div>
            <div className="skeleton skeleton-button"></div>

        </div>
    );
}

export default ProductCardSkeleton;
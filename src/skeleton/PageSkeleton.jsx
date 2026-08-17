import ProductCardSkeleton from "./ProductCardSkeleton";
import "../CSS/index.css";

function PageSkeleton() {
    return (
        <div className="page-skeleton">
            <div className="skeleton skeleton-hero"></div>
            <div className="skeleton skeleton-section-title"></div>
            <div className="grid">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
            <div className="skeleton skeleton-section-title"></div>
            <div className="grid">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>

        </div>
    );
}

export default PageSkeleton;
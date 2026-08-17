import "../CSS/Profile.css";
import "../CSS/Skeleton.css";

function ProfileSkeleton() {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="skeleton skeleton-profile-title"></div>
                <div className="profile-image-section">
                    <div className="skeleton skeleton-profile-image"></div>
                    <div className="image-buttons">
                        <div className="skeleton skeleton-profile-btn"></div>
                        <div className="skeleton skeleton-profile-btn"></div>
                    </div>
                </div>
                <div className="profile-info">
                    {[1,2,3].map((item)=>(
                        <div className="info-row" key={item}>
                            <div className="skeleton skeleton-label"></div>
                            <div className="skeleton skeleton-input"></div>
                        </div>
                    ))}
                </div>
                <div className="profile-actions">
                    <div className="skeleton skeleton-action-btn"></div>
                    <div className="skeleton skeleton-action-btn"></div>
                </div>
            </div>
        </div>
    );
}
export default ProfileSkeleton;
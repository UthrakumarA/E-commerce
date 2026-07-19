import { useRef, useState } from "react";
import toast from "react-hot-toast";
import defaultProfile from "../assets/default-profile.png";
import "../CSS/Profile.css";


function MyProfile() {
    const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

    const [profileImage, setProfileImage] = useState(
    loggedInUser.profileImage || defaultProfile
);

    const [editingName, setEditingName] = useState(false);
    const [name, setName] = useState(loggedInUser.name);
    const [editingPassword, setEditingPassword] = useState(false);
    const [password, setPassword] = useState(loggedInUser.password);
    const [showPassword, setShowPassword] = useState(false);

    const fileInputRef = useRef(null);
    
    const showSuccess = (message) => {
        toast.success(message);
    };
    
    const showError = (message) => {
        toast.error(message);
    };
    const showInfo = (message) => {
        toast(message, {icon: "ℹ️",});
    };

   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        showError("Please select a valid image file.");
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        showError("Image size must be less than 2 MB.");
        return;
    }
    const reader = new FileReader();
     reader.onload = () => {
        setProfileImage(reader.result);
        showSuccess("Profile picture selected.");
    };
    reader.readAsDataURL(file);
};

    const handleRemovePhoto = () => {
        if (profileImage === defaultProfile) {
            showInfo("No profile picture to remove.");
            return;
        }
        setProfileImage(defaultProfile);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        showInfo("Profile picture removed.");
    };

    const hasChanges = () => {
        return (
        name !== loggedInUser.name ||
        password !== loggedInUser.password ||
        profileImage !== (loggedInUser.profileImage || defaultProfile)
    );

};

    const handleSave = () => {

    if (!hasChanges()) {
        showInfo("No changes to save.");
        return;
    }

    const updatedUser = {
        ...loggedInUser,
        name,
        password,
        profileImage
    };

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {
        if (user.email === loggedInUser.email) {
            return updatedUser;
        }
        return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEditingName(false);
    setEditingPassword(false);
    setShowPassword(false);

    showSuccess("All changes saved successfully.");
};

const handleDiscard = () => {
    
    if (!hasChanges()) {
        showInfo("No changes to discard.");
        return;
    
    }
    setName(loggedInUser.name);
    setPassword(loggedInUser.password);
    setProfileImage(loggedInUser.profileImage || defaultProfile);

    setEditingName(false);
    setEditingPassword(false);
    setShowPassword(false);

    if (fileInputRef.current){
        fileInputRef.current.value = "";
    }
    showInfo("Changes discarded.");
};

return(

<div className="profile-container">
    
    <div className="profile-card">
        
        <h1 className="profile-title">👤 My Profile</h1>
        
        <div className="profile-image-section">
            
            <img src={profileImage} alt="Profile" className="profile-image"/>
            <input type="file" ref={fileInputRef} accept="image/*" style={{ display: "none" }} onChange={handleImageChange}/>
            
            <div className="image-buttons">
                <button className="remove-photo" title="Remove Profile Photo" aria-label="Remove Profile Photo" onClick={handleRemovePhoto}>
                    🗑 Remove
                </button>
                <button className="change-photo" title="Change Profile Photo"onClick={() => fileInputRef.current.click()}>
                    📷 Change
                </button>
            </div>
        </div>

    <div className="profile-info">
         <div className="info-row">
            <h3>Full Name</h3>
            {!editingName ? (<div className="info-value">

            <span>{name}</span>

            <button className="icon-btn" title="Edit Name" aria-label="Edit Name" onClick={() => setEditingName(true)}>
                ✏️
            </button>

        </div>

    ) : (

        <div className="edit-section">

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="edit-input" autoFocus/>

                <button className="mini-cancel" onClick={() => {
                        setName(loggedInUser.name);
                        setEditingName(false);
                    }}>
                    ✖
                </button>

        </div>

    )}

</div>
        <div className="info-row">

            <h3>Email</h3>

            <div className="info-value">
                <span>{loggedInUser.email}</span>
            </div>

        </div>

        <div className="info-row">

    <h3>Password</h3>

    {!editingPassword ? (

        <div className="info-value">
            <span>{"•".repeat(password.length)}</span>

            <button className="icon-btn" title="Edit Password" aria-label="Edit Password" onClick={() => setEditingPassword(true)} >
                ✏️
            </button>
        </div>
        
    ) : (

        <div className="edit-section">

            <input type={showPassword ? "text" : "password"} value={password} 
            onChange={(e) => setPassword(e.target.value)} className="edit-input" autoFocus/>

            <div className="edit1-section">
                <button className="show-password-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "🙈 Hide Password" : "👁️ Show Password"}
                </button>
                
                <button className="mini-cancel" onClick={() => {
                    setPassword(loggedInUser.password);
                    setEditingPassword(false);}}>
                    ✖
                </button>
            </div>
        </div>

    )}

</div>

</div>

    <div className="profile-actions">

        <button className="discard-btn" onClick={handleDiscard}>
            ❌ Discard
        </button>
        
        <button className="save-btn" onClick={handleSave}>
            💾 Save
        </button>

    </div>

</div>

</div>
);}

export default MyProfile;
import React, { useEffect, useState } from 'react';
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
     const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <LoadingSpinner />;
    
    
    return (
        <div>
            This is your Profile
        </div>
    );
};

export default Profile;
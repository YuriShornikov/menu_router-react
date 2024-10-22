import React, { useState, useEffect } from 'react';

interface InfoProps {
    id: number;
    name: string;
}

interface UserDetails {
    id: number;
    name: string;
    avatar: string;
    details: {
        city: string;
        company: string;
        position: string;
    };
}

export const Details: React.FC<{ info: InfoProps }> = ({ info }) => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUserData = async () => {
        setLoading(true);
        setError(null);
        try {
            
            // Динамическая загрузка данных из JSON файла на основе ID
            const data: UserDetails = await import(`../data/${info.id}.json`);
            setUserDetails(data);
        } catch (err) {
            setError('Failed to load user details');
            console.error('Error loading user details:', err);
        } finally {
            setLoading(false);
        }
        };

        loadUserData();
    }, [info.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!userDetails) {
        return <div>No details available</div>;
    }

    return (
        <div className="details">
            <img src={userDetails.avatar} alt={`${userDetails.name}'s avatar`} width="100" />
            <h2>{userDetails.name}</h2>
            <p><strong>City:</strong> {userDetails.details.city}</p>
            <p><strong>Company:</strong> {userDetails.details.company}</p>
            <p><strong>Position:</strong> {userDetails.details.position}</p>
        </div>
    );
};

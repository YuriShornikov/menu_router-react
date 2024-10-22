import React from 'react';

interface User {
    id: number;
    name: string;
}

interface ListProps {
    users: User[];
    onUserSelect: (user: User) => void;
}

export const List: React.FC<ListProps> = ({ users, onUserSelect }) => {
    return (
        <ul className="user-list">
            {users.map((user) => (
                <li key={user.id} onClick={() => onUserSelect(user)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};
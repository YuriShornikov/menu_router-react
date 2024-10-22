import React, { useState, useEffect } from 'react';
import { List } from './components/List/List';
import { Details } from './components/Details/Deteils';
import usersData from './components/data/users.json';

interface User {
    id: number;
    name: string;
}

export const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>(usersData);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <div className="container">
            <List users={users} onUserSelect={setSelectedUser} />
            {selectedUser && <Details info={selectedUser} />}
        </div>
    );
};

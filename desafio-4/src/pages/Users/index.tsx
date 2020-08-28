import React, { useEffect, useState} from 'react';
import api from '../../services/api'
import './styles.css';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect( () => {
        api.get('users').then(response => {
            setUsers(response.data.data)
        })
    }, [])


    return (
        <ul className="items-grid">
            {users.map((item) => (
              <li
                key={item.id}
              >
                <img src={item.avatar} alt={item.first_name} />
                <span>{item.first_name} {item.last_name}</span>
                <span>{item.email}</span>
              </li>
            ))}
        </ul>
    )
}

export default Users;
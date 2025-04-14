// Dummy data for users in a chat list
import { FaUserCircle } from 'react-icons/fa';

const users = [
    {
        id: 1,
        name: 'Alice Johnson',
        profilePic: <FaUserCircle size={40} color="#555" />,
        lastMessage: 'Hey! How are you doing?',
    },
    {
        id: 2,
        name: 'Bob Smith',
        profilePic: <FaUserCircle size={40} color="#777" />,
        lastMessage: 'Let’s meet tomorrow at 5.',
    },
    {
        id: 3,
        name: 'Charlie Lee',
        profilePic: <FaUserCircle size={40} color="#999" />,
        lastMessage: 'I sent the files you asked for.',
    },
    {
        id: 4,
        name: 'Diana Prince',
        profilePic: <FaUserCircle size={40} color="#333" />,
        lastMessage: 'See you at the event tonight!',
    },
    {
        id: 5,
        name: 'Ethan Miller',
        profilePic: <FaUserCircle size={40} color="#888" />,
        lastMessage: 'Sure, I’ll get back to you soon.',
    },
];

export default users;

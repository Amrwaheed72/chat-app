import { FaUserCircle } from 'react-icons/fa';

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    profilePic: <FaUserCircle size={40} color="#555" />,
    status: 'online',
    lastMessage: 'Hey! How are you doing?',
    messages: [
      { id: 1, text: 'Hey!', sender: 'them', timestamp: '10:00 AM' },
      {
        id: 2,
        text: 'How are you doing?',
        sender: 'them',
        timestamp: '10:01 AM',
      },
      { id: 3, text: 'I’m good, you?', sender: 'me', timestamp: '10:02 AM' },
    ],
  },
  {
    id: 2,
    name: 'Bob Smith',
    profilePic: <FaUserCircle size={40} color="#777" />,
    status: 'offline',
    lastMessage: 'Let’s meet tomorrow at 5.',
    messages: [
      {
        id: 1,
        text: 'Are you free tomorrow?',
        sender: 'them',
        timestamp: '9:30 AM',
      },
      {
        id: 2,
        text: 'Yes, let’s meet at 5.',
        sender: 'me',
        timestamp: '9:32 AM',
      },
      {
        id: 3,
        text: 'Perfect, see you then!',
        sender: 'them',
        timestamp: '9:33 AM',
      },
    ],
  },
  {
    id: 3,
    name: 'Charlie Lee',
    profilePic: <FaUserCircle size={40} color="#999" />,
    status: 'offline',
    lastMessage: 'I sent the files you asked for.',
    messages: [
      {
        id: 1,
        text: 'Did you get the files?',
        sender: 'them',
        timestamp: '8:00 AM',
      },
      {
        id: 2,
        text: 'Not yet, can you resend?',
        sender: 'me',
        timestamp: '8:02 AM',
      },
      { id: 3, text: 'Sent them again.', sender: 'them', timestamp: '8:05 AM' },
    ],
  },
  {
    id: 4,
    name: 'Diana Prince',
    profilePic: <FaUserCircle size={40} color="#333" />,
    status: 'online',
    lastMessage: 'See you at the event tonight!',
    messages: [
      {
        id: 1,
        text: 'Don’t forget the event tonight.',
        sender: 'them',
        timestamp: '11:00 AM',
      },
      {
        id: 2,
        text: 'I won’t! I’m excited.',
        sender: 'me',
        timestamp: '11:01 AM',
      },
      {
        id: 3,
        text: 'Same here! See you there.',
        sender: 'them',
        timestamp: '11:03 AM',
      },
    ],
  },
  {
    id: 5,
    name: 'Ethan Miller',
    profilePic: <FaUserCircle size={40} color="#888" />,
    status: 'online',
    lastMessage: 'Sure, I’ll get back to you soon.',
    messages: [
      {
        id: 1,
        text: 'Hey, did you check the proposal?',
        sender: 'me',
        timestamp: '7:45 AM',
      },
      {
        id: 2,
        text: 'Not yet, I’ll get back to you soon.',
        sender: 'them',
        timestamp: '7:50 AM',
      },
      {
        id: 3,
        text: 'No worries, take your time.',
        sender: 'me',
        timestamp: '7:52 AM',
      },
    ],
  },
];

export default users;

const navigationLinks = [
  {
    title: 'Main App',
    children: [
      {
        name: 'Dashboard',
        route: '/dashboard',
      },
      {
        name: 'Status',
        route: '/',
      },
      {
        name: 'Stand ups',
        route: '/',
      },
      {
        name: 'Entertainment',
        route: '/',
      },
      {
        name: 'Action',
        route: '/',
      },
    ],
  },
  {
    title: 'Workflow',
    children: [
      {
        name: 'Messages',
        route: '/',
      },
      {
        name: 'Team',
        route: '/',
      },
      {
        name: 'Channels',
        route: '/',
      },
    ],
  },
  {
    title: 'Settings',
    children: [
      {
        name: 'Profile Settings',
        route: '/',
      },
      {
        name: 'Logout',
        route: '/',
      },
    ],
  },
];

export default navigationLinks;

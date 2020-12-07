import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Ailcons from 'react-icons/ai';
import * as Iolcons from 'react-icons/io';
import * as Rilcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <Iolcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <Iolcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <Iolcons.IoIosPaper />,
      },
      {
        title: 'Reports 2',
        path: '/reports/reports1',
        icon: <Iolcons.IoIosPaper />,
      },
    ],
  },

  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
];

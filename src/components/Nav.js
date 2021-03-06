import React from 'react';
import { Router, Link } from '@reach/router';
import NavWrapper from './styles/NavWrapper';
import LineChart from './LineChart';
import BarChart from './BarChart';
import CirclePack from './CirclePack';
import Network from './Network';
import Force from './Force';

const pages = [
  {
    component: path => <LineChart path={path} key={path} />,
    path: '/',
    title: 'Line chart',
  },
  {
    component: path => <BarChart path={path} key={path} />,
    path: '/BarChart',
    title: 'Bar chart',
  },
  {
    component: path => <CirclePack path={path} key={path} />,
    path: '/CirclePack',
    title: 'Circle pack',
  },
  {
    component: path => (
      <Network path={path} key={path} width={900} height={600} />
    ),
    path: '/Network',
    title: 'Network',
  },
  {
    component: path => (
      <Force path={path} key={path} width={900} height={600} />
    ),
    path: '/Force',
    title: 'Force',
  },
];

const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        {pages.map((page, i) => (
          <Link
            key={`link-${i}`}
            className={
              window.location.pathname === `${page.path}` ? 'active' : ''
            }
            to={page.path}
          >
            {page.title}
          </Link>
        ))}
      </nav>
      <Router>{pages.map(page => page.component(page.path))}</Router>
    </NavWrapper>
  );
};

export default Navbar;

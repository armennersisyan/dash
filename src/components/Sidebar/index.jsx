import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SidebarWrapper } from './styles';
import navigationLinks from './links';
import LayoutContext from '../../layouts/Auth/context';

function Sidebar({ children }) {
  const { layout } = useContext(LayoutContext);

  return (
    <SidebarWrapper open={layout.sidebar}>
      {navigationLinks && navigationLinks.map((group) => (
        <div key={group.title} className="nav-list">
          <p className="nav-title">{group.title}</p>
          <ul>
            {group && group.children.map((link) => (
              <li key={link.name} className="nav-list-item">
                <Link to={link.route}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      { children }
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default React.memo(Sidebar);

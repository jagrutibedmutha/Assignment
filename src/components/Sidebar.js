import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
       ☰
      </button>
      <Nav className={`flex-column sidebar ${isOpen ? 'open' : ''}`}>
      {['A', 'B', 'C', 'D', 'E'].map(menu => (
        <LinkContainer to={`/menu${menu}`} key={menu}>
          <Nav.Link>
          <FontAwesomeIcon icon={faChartBar} /> Menu {menu}
          </Nav.Link>
        </LinkContainer>
      ))}
    </Nav>
    </>
  );
};
export default Sidebar;
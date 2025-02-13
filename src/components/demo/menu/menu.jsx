import './style.css';
import { Menudata } from './menudata';
import React from 'react';

function Menu() {
  return (
    <div className="Menu">
      <ul className="Menulist">
        {Menudata && Menudata.map((val, key) => (
          <li
            key={val.id || key} 
            className={`row ${window.location.pathname === val.link ? "active" : ""}`}
            onClick={() => (window.location.href = val.link)}
          >
            <div className="icon">{val.icon}</div>
            <div className="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

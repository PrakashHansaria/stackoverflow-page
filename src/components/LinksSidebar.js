import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function LinksSidebar() {
    return (
        <div className="right-sidebar-links">
            <div className="right-sidebar-links-header">
                Linked
                    </div>

            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-basic btn btn-xs">1</button>
                        What does virtual DOM really mean
                      </a>
            </div>
            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-green btn btn-xs">3</button>
                        use plugin International Telephone Input in react
                      </a>
            </div>
            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-green btn btn-xs">0</button>
                        virtual DOM and Real DOM difference in React JS?
                      </a>
            </div>
            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-green btn btn-xs">5</button>
                        React Virtual Dom under the hood
                      </a>
            </div>
            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-basic btn btn-xs">1</button>
                        How is DOM and Virtual DOM represented in memory?
                      </a>
            </div>
            <div className="right-sidebar-links-content">
                <a href={() => false} className="sidebar-links">
                    <button className="link-button-basic btn btn-xs">1</button>
                        VirtualDOM of react
                      </a>
            </div>

        </div>
    )
}

export default LinksSidebar;
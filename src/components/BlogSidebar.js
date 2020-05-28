import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function BlogSidebar() {
    return (
        <div className="right-sidebar">
            <div className="right-sidebar-blog-head">
                The Overflow Blog
                    </div>
            <div className="right-sidebar-blog">
                <span>
                    <i className="fas fa-pen mr-2"></i>
                </span>
                      Podcast 383: Mayor of Open Source town
                    </div>
            <div className="right-sidebar-blog">
                <span>
                    <i className="fas fa-pen mr-2"></i>
                </span>
                      The Loop, May 2020: Dark Mode
                    </div>
            <div className="right-sidebar-blog-head">
                Feature on meta
                    </div>
            <div className="right-sidebar-blog">
                <span >
                    <i className="far fa-comment-alt mr-2"></i>
                </span>
                      Meta escalation/response process update (March-April 2020 test results, next…
                    </div>
            <div className="right-sidebar-blog">
                <span >
                    <i className="far fa-comment-alt mr-2"></i>
                </span>
                      iOS Mobile App - Push notifications down from 5/25 - 6/4
                    </div>
            <div className="right-sidebar-blog">
                <span >
                    <i className="fab fa-stack-overflow fa-lg mr-2"></i>
                </span>
                      Threshold experiment results: closing, editing and reopening all become more…
                    </div>
            <div className="right-sidebar-blog">
                <span >
                    <i className="fab fa-stack-overflow fa-lg mr-2"></i>
                </span>
                    It's time to reward the duplicate finders
                  </div>
        </div>
    )
}

export default BlogSidebar;
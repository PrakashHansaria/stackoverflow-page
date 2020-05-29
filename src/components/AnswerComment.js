import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function AnswerComments() {
    return (
        <table className="post-comments table border-bottom">
            <tbody>
                <tr className="border-bottom border-top">
                    <td>1</td>
                    <td className="post-comments">I believe Virtual DOM is talking about nodes that are not in the normal DOM. – Derek</td>
                </tr>
                <tr className="border-bottom">
                    <td>8</td>
                    <td className="post-comments">I agree with the above sentiments with regard to moderation. Moreover, I believe this is a very valid and useful question. "Virtual DOM" is often referenced, but rarely defined. – btiernay Apr 25 '15 at 21:38 </td>
                </tr>
                <tr className="border-bottom">
                    <td>2</td>
                    <td className="post-comments">I could not understand this with my limited web experience until reading the scotch.io tutorial to get started. They've done a great job. – Rachael Sep 10 '15 at 3:52</td>
                </tr>
            </tbody>
        </table>
    )
}

export default AnswerComments;
import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';
import AnswerComment from './AnswerComment'

function Answer(props) {
    return (

        <div className="my-3 border-bottom">
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td className="question-votes-panel">
                            <div className="text-center">
                                <button className="vote btn" type="button" onClick={props.onClickUp}>
                                    <i className="fa fa-caret-up fa-3x"></i>
                                </button>
                                <div className="vote-count" style={{ fontSize: "20px" }}>{props.vote}</div>
                                <button className="vote btn" type="button" onClick={props.onClickDown}>
                                    <i className="fa fa-caret-down fa-3x"></i>
                                </button>

                                {props.accepted?
                                (
                                        <i className="fas fa-check fa-2x"></i>
                                ):null
                                }
                                
                                <button className="vote btn mt-2" type="button">
                                    <i className="fa fa-history fa-1x"></i>
                                </button>
                            </div>
                        </td>
                        <td className="answers-main">
                            <div className="answer">
                                {props.content}
                            </div>
                            <div className="post-options mt-4 mb-5">
                                <a href={() => false} className="post-links mr-2">share</a>
                                <a href={() => false} className="post-links mr-2">improve this question</a>
                                <a href={() => false} className="post-links mr-2">follow</a>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        {
                        props.comments?
                        (
                            <td className="question-comments mt-5">
                            <AnswerComment />
                            <span className="post-links">add a comment</span>
                        </td>
                        ):null               
                        }
                        
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Answer;
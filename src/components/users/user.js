import React from 'react';
import '../../styles/main.scss';
import './user.scss';

const user = (props) => {
    const {
        uname, profile, avatar, uniKey, repos, isSelected, handleUserDetailShow
    } = props;
    const idStr = `collapseExample-${uniKey}`;

    const performOnclickCheck = (e) => {
        if (!e.target.classList.contains('show')) {
           props.fetchRepo(uname); 
           handleUserDetailShow(uniKey); // sending the selected user id.
        }
         return null;
    };

    return (
        <div className="container-fluid ">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={avatar} className="card-img rounded-circle " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{uname}</h5>
                            <p className="card-text">{profile}</p>
                            <button
                                className="btn btn-outline-info float-right"
                                type="button"
                                data-toggle="collapse"
                                data-target={`#${idStr}`}
                                id={`#${idStr}`}
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                onClick={performOnclickCheck}>
                                    Details
                            </button>
                            {isSelected ? <div className="collapse" id={idStr}> {/* Checking if any other accordion is open using isSelected */}
                                <div className="card card-body">
                                    {repos.map((item, key) => (
                                        // 1.check array from 0 if any array elemnt ahve the show class.
                                        <p key={key}>{item.props.name}</p>
                                    ))}
                                </div>
                            </div>: null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default user;

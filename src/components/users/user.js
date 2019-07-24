import React from 'react';
import '../../styles/main.scss';
import './user.scss';

const user = (props) => {
    const repoList = React.createRef();
    const {
        uname, profile, avatar, uniKey, repos
    } = props;
    const idStr = `collapseExample-${uniKey}`;
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
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                onClick={() => !repoList.current.classList.contains('show') ? props.fetchRepo(uname) : null}>
                                    Details
                            </button>
                            <div ref={repoList} className="collapse" id={idStr}>
                                <div className="card card-body">
                                    {repos.map((item, key) => (
                                        <p key={key}>{item.props.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default user;

import React from 'react';
import '../../styles/main.scss';
import './user.scss';


const user = (props) => {
    const idStr = `collapseExample-${0}`;
    const { uname, profile, avatar } = props;
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
                                onClick={() => props.fetchRepo()}>
                                {`Details`}
                            </button>
                            <div className="collapse" id={idStr}>
                                <div className="card card-body">
                                    {/* {repos.map((item, key) => (
                                        <p key={key}>{item.full_name}</p>
                                    ))} */}
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

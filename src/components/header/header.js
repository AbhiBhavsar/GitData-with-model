import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import User from '../users/user';
import '../../styles/main.scss';
import './header.scss';
import GitUserModel from '../../models/gitUserModel';
import GitReposModel from '../../models/gitReposModel';

class Header extends React.Component {
    onInputChange = (elem) => {
        this.setState({ searchTerm: elem.target.value });
        if (elem.key === 'Enter') {
            this.fetchUsers();
        }
    }
    /* =================== SORTING LOGIC ================== */

    compareValues = (key, order) => {
        return function (a, b) {
            if (!a.hasOwnProperty.call(a, key) || !b.hasOwnProperty.call(b, key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    sortData = (userData, ele) => {
        const criteria = ele.target.value;
        let sortedUser;
        switch (criteria) {
            case 'nameAsc':
                sortedUser = userData.sort(this.compareValues('login', 'asc'));
                this.setState({ users: sortedUser });
                // userData.sort((a, b) => a.login - b.login);
                break;

            case 'nameDsc':
                sortedUser = userData.sort(this.compareValues('login', 'desc'));
                this.setState({ users: sortedUser });
                break;

            case 'rankAsc':
                sortedUser = userData.sort(this.compareValues('score', 'asc'));
                this.setState({ users: sortedUser });
                break;

            case 'rankDsc':
                sortedUser = userData.sort(this.compareValues('score', 'desc'));
                this.setState({ users: sortedUser });
                break;

            default:
                break;
        }
    };
    /* ======================= SORTING LOGIC END ==================== */

    /* ======================= DATA FETCHING LOGIC ================= */
    fetchUsers = (e) => {
        const { searchTerm } = this.state;
        e.preventDefault();
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then((resp) => {
                new GitUserModel(resp.data).$save();
            });  
    }

    fetchRepo = (uname) => {
        axios.get(`https://api.github.com/users/${uname}/repos`)
            .then((resp) => {
                GitReposModel.deleteAll();
                GitReposModel.saveAll(resp.data.map(obj => new GitReposModel(obj)));
            });
    }
    /* ======================= DATA FETCHING LOGIC ================= */

    render() {
        /*eslint-disable*/
        const { gitApiData, gitUserData, gitReposData, total_count } = this.props;
        console.log(`[Git Repos Data]:`, gitReposData);
        return (
            <React.Fragment>
                <div className="full-width">
                    <div className="container-fluid bg-info">
                        <div className="row">
                            <form className="form-inline" onSubmit={e => this.fetchUsers(e)}>
                                <h5>Sort By:</h5>
                                <div className="form-group">
                                    <select name="sortBy" className="form-control" onChange={(e) => this.sortData(gitUserData[0], e)}>
                                        <option value="" />
                                        <option value="nameAsc">Name(A-Z)</option>
                                        <option value="nameDsc">Name(Z-A)</option>
                                        <option value="rankAsc">Rank &uarr;</option>
                                        <option value="rankDsc">Rank &darr;</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="searchBox" placeholder="Search" onChange={e => this.onInputChange(e)} />
                                    <button type="submit" className="btn btn-default" name="search">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ====Total Count Display===== */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                            <h6>Total Results: {total_count}</h6>

                            </div>
                        </div>
                        <div className="row col-lg-8 col-sm-12 mx-auto">
                        {gitUserData.length > 0 && gitUserData.map(item => (
                            gitUserData[0].map( (innerArrEle, innerIdx)=>(
                            <User
                                key={innerArrEle.id}
                                uniKey={innerArrEle.id}
                                uname={innerArrEle.login}
                                profile={innerArrEle.url}
                                avatar={innerArrEle.avatar_url}
                                fetchRepo={this.fetchRepo}
                                repos = {gitReposData}
                                />
                         ))
                          ))}
                        </div>
                        {this.sortedUser}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gitApiData: GitUserModel.list(),

        total_count: GitUserModel.list().map((arrEle, index)=>{     // 1. Main Api Response
            return arrEle.props.total_count;
            }),          

        gitUserData: GitUserModel.list().map((arrEle, index)=>{     // 2. Actual Users Data
                        return arrEle.props.items;
                        }),

        gitReposData: GitReposModel.list()                          // 3. Each Users Repositories data.
    };
};

export default connect(mapStateToProps)(Header);

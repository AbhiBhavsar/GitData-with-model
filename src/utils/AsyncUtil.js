import { pickBy } from 'lodash';
import store from '../store/store';
import { category } from './constant';

export function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

export function dispatch(action) {
    if ((action).type) {
        return store.dispatch((action));
    }
    return store.dispatch(action);
}

export function getQuery(querySet) {
    const query = [];
    Object.keys(querySet).forEach((key) => {
        const selectedChoices = pickBy(querySet[key]);
        if (Object.keys(selectedChoices).length > 0) {
            query.push(`${key}=${Object.keys(selectedChoices).join(',')}`);
        }
    });
    return query.join('&');
}

export const getAccountStatus = (status) => {
    switch (status) {
        case 'Pre-opportunity': return `In-pursuit`;
        case 'Converted': return `Converted`;
        case 'Disqualified': return `Disqualified`;
        case 'Ignore': return `Ignore`;
        default: return `In-pursuit`;
    }
};
export const getAccountType = (type) => {
    switch (type) {
        case 'New Business': return `New Business`;
        case 'Expansion': return `Expansion`;
        default: return `New Business`;
    }
};

export function getCategoryColor(cat) {
    let klass = '';
    switch (cat.toString().toLowerCase()) {
        case category.WHY_US:
            klass = 'purple';
            break;
        case category.WHY_CHANGE:
            klass = 'green';
            break;
        case category.WHO_DECIDES:
            klass = 'blue';
            break;
        default:
            break;
    }
    return klass;
}

export function getInitials(name) {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function getFiscalYears() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i > currentYear - 4; i -= 1) {
        years.push(i);
    }
    const fiscalYears = years.map(item => ({ label: 'FY' + `${item}`.substring(2, item.length), value: `${item}` }));
    return fiscalYears;
}

export function getFiscalQuarters() {
    return [
        { label: 'Q1', value: 'Q1' },
        { label: 'Q2', value: 'Q2' },
        { label: 'Q3', value: 'Q3' },
        { label: 'Q4', value: 'Q4' }
    ];
}

export function getTopics() {
    return [
        {
            id: 1,
            displaypos: 1,
            name: "Economic Drivers"
        },
        {
            id: 2,
            displaypos: 2,
            name: "Use Cases"
        },
        {
            id: 3,
            displaypos: 3,
            name: "Pain Points"
        },
        {
            id: 4,
            displaypos: 4,
            name: 'Personas'
        },
        {
            id: 5,
            displaypos: 5,
            name: 'Value Proposition'
        },
        {
            id: 6,
            displaypos: 7,
            name: 'Competition'
        },
        {
            id: 7,
            displaypos: 6,
            name: 'Objections'
        },
        {
            id: 8,
            displaypos: 8,
            name: 'Content'
        },
        {
            id: 9,
            displaypos: 9,
            name: 'Partners'
        },
        {
            id: 10,
            displaypos: 10,
            name: 'Activities'
        }
    ];
}

export function containsPermission(permission) {
    const AUTH = process.env.AUTH;
    if (AUTH !== null && typeof AUTH !== 'undefined' && AUTH !== 'undefined') {
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            const found = user.authorities.indexOf(permission) >= 0;
            return found;
        }
        window.open('#', '_self');
        return false;
    }
    return true;
}

export function getLoggedInUser() {
    let userData = localStorage.getItem('user');
    if (userData) {
        userData = JSON.parse(userData);
    } else {
        userData = {
            username: 'system',
            firstName: 'System',
            lastName: '',
            role: 'ADMIN',
            userId: 19
        };
    }
    return userData;
}

export function getPromiseOrData(obj, promise) {
    return obj && Object.keys(obj).length > 0 ? new Promise(r => r({ data: obj })) : promise;
}

export function getShortName(str) {
    const arr = str.toLowerCase().split(' ');
    arr[arr.length - 1] = arr[arr.length - 1][0] + '.';
    return arr.map(word => (
        word.charAt(0).toUpperCase() + word.slice(1)
    )).join(' ');
}

export function opportunityPlannerHeadings() {
    return [{
        label: 'PROSPECTING',
        value: "$100,000"
    },
    {
        label: 'DISCOVERY',
        value: '$200,000'
    },
    {
        label: 'SOLUTION',
        value: '$300,000'
    },
    {
        label: 'EVALUATION',
        value: '$100,000'
    },
    {
        label: 'NEGOTIATION',
        value: '$100,000'
    }
    ];
}

export function addCommas(str) {
    const string = (str || '').toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    return string;
}

export function reasonsForDisqualification() {
    return [{
        id: 'Wrong Timing',
        reason: 'Wrong Timing',
    },
    {
        id: 'Don\'t have Need/Urgency',
        reason: 'Don\'t have Need/Urgency'
    },
    {
        id: 'Lack Strong Champion',
        reason: 'Lack Strong Champion'
    },
    {
        id: 'Can\'t access Decision Maker',
        reason: 'Can\'t access Decision Maker'
    },
    {
        id: 'Not a good technical fit',
        reason: 'Not a good technical fit'
    },
    {
        id: 'Existing Opportunity',
        reason: 'Existing Opportunity'
    },
    {
        id: 'Too small for us',
        reason: 'Too small for us'
    },
    {
        id: 'Other',
        reason: 'Other'
    }
];
}

export function typeOptions() {
    return [{
        id: 'New Buisness',
        name: 'New Buisness'
    },
    {
        id: 'Expansion',
        name: 'Expansion'
    }
];
}

export function sentimentOptions() {
    return [{
        id: 'Positive',
        name: 'Positive'
    },
    {
        id: 'Negative',
        name: 'Negative'
    },
    {
        id: 'Neutral',
        name: 'Neutral'
    },
    {
        id: 'Unknown',
        name: 'Unknown'
    }
];
}

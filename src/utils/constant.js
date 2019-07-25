
export const LOADING = 'LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_SUCCESS = 'SET_SUCCESS';
export const RELOAD = 'RELOAD';
export const UNSET_RELOAD = 'UNSET_RELOAD';
export const ERROR_STATE = { isLoading: false, hasError: true };
export const PENDING_STATE = { isLoading: true, hasError: false };
export const SUCCESS_STATE = { isLoading: false, hasError: false };
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const DELETE_ALL_INSTANCES = 'DELETE_ALL_INSTANCES';
export const DELETE_INSTANCE = 'DELETE_INSTANCE';
export const SAVE_ALL_INSTANCES = 'SAVE_ALL_INSTANCES';
export const SAVE_INSTANCE = 'SAVE_INSTANCE';
export const SAVE_LAST = 'SAVE_LAST';
export const INVALID_INSTANCE_CANNOT_SAVE = 'INVALID_INSTANCE_CANNOT_SAVE';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SAVE_ALL_INSTANCES_ON_TOP = 'SAVE_ALL_INSTANCES_ON_TOP';
export const CLEAR_IDENTIFIER_FROM_STATE = 'CLEAR_IDENTIFIER_FROM_STATE';

// header icon click actions
export const Icons = {
    WIDGET: 'widget',
    GUIDED_STORYBUILDING: 'guided_storybuilding',
    DELETE: 'delete',
    DELETE_DISABLED: 'delete role-disabled',
    PLAY: 'play',
    RECORD: 'record',
    RECORD_DISABLED: 'record role-disabled',
    STORYBOARD: 'storyboard',
    CREATE_NEW: 'create_new',
    CREATE_NEW_DISABLED: 'create_new role-disabled',
    SHARE: 'share',
    BOOKMARK: 'bookmark',
    FILTER: 'filter',
    DOCUMENT: 'document',
    NOTIFICATION: 'notification',
    HELP: 'help',
    PODCAST: 'podcast',
    SAVE: 'save',
    TRANSCRIPT: 'transcipt',
    CALL_TRANSCRIPT: 'call_transcript',
    EMAIL_TRANSCRIPT: 'email_transcript'
};

// category based class names
export const category = {
    WHY_US: 'why us',
    WHY_CHANGE: 'why change',
    WHO_DECIDES: 'who decides'
};

// form field types

export const FieldTypes = {
    MULTIPLE: 'multiple',
    CHECKBOX: 'checkbox',
    TEXT_AREA: 'textarea',
    TEXT_FIELD: 'textfield',
    FILE: 'file',
    DROPDOWN: 'dropdown',
    RADIO_GROUP: 'radiogroup',
    URL: 'url'
};

export const MONTHS = [
    {
        fullName: "January",
        shortName: "Jan"
    }, {
        fullName: "February",
        shortName: "Feb"
    }, {
        fullName: "March",
        shortName: "Mar"
    }, {
        fullName: "April",
        shortName: "Apr"
    }, {
        fullName: "May",
        shortName: "May"
    }, {
        fullName: "June",
        shortName: "Jun"
    }, {
        fullName: "July",
        shortName: "Jul"
    }, {
        fullName: "August",
        shortName: "Aug"
    }, {
        fullName: "September",
        shortName: "Sep"
    }, {
        fullName: "October",
        shortName: "Oct"
    }, {
        fullName: "November",
        shortName: "Nov"
    }, {
        fullName: "December",
        shortName: "Dec"
    }
];

export const DAYS = [
    {
        fullName: "Sunday",
        shortName: "Sun"
    }, {
        fullName: "Monday",
        shortName: "Mon"
    }, {
        fullName: "Tuesday",
        shortName: "Tue"
    }, {
        fullName: "Wednesday",
        shortName: "Wed"
    }, {
        fullName: "Thursday",
        shortName: "Thu"
    }, {
        fullName: "Friday",
        shortName: "Fri"
    }, {
        fullName: "Saturday",
        shortName: "Sat"
    }
];

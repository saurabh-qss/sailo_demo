

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MANDATORY_FIELDS = ['firstName', 'lastName', 'email', 'group'];

const DEFAULT_VALUE = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    group: '',
    hideNotification: false
};

export{
    EMAIL_REGEX,
    MANDATORY_FIELDS,
    DEFAULT_VALUE
}

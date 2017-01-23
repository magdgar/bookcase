var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function () {
        return (
            React.createElement('li', {className: 'ContactItem'},
                React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
                React.createElement('a', {
                    className: 'ContactItem-email',
                    href: 'mailto:' + this.props.email
                }, this.props.email),
                React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
            )
        )
    }
});

var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },

    onNameChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {name: e.target.value}));
    },

    onEmailChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {email: e.target.value}));
    },

    onDescriptionChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {description: e.target.value}));
    },

    onSubmit: function (e) {
        e.preventDefault();
        this.props.onSubmit();
    },

    render: function () {
        var errors = this.props.contact.errors || {};

        return (
            React.createElement('form', {
                    onSubmit: this.onSubmit,
                    className: 'ContactForm', noValidate: true
                },
                React.createElement('input', {
                    type: 'tekst',
                    className: errors.name && 'ContactForm-error',
                    placeholder: 'Name (reqiured)',
                    value: this.props.contact.name,
                    onChange: this.onNameChange,
                }),
                React.createElement('input', {
                    type: 'email',
                    className: errors.email && 'ContactForm-error',
                    placeholder: 'Email (reqiured)',
                    value: this.props.contact.email,
                    onChange: this.onEmailChange,
                }),
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.contact.description,
                    onChange: this.onDescriptionChange,
                }),
                React.createElement('button', {type: 'submit'}, "Add Contact"))
        )
    },
});

var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onContactChange: React.PropTypes.func.isRequired,
        onContactSubmit: React.PropTypes.func.isRequired,
    },

    render: function () {
        var contactItemElements = this.props.contacts
            .filter(function (contact) {
                return contact.email
            })
            .map(function (contact) {
                return React.createElement(ContactItem, contact)
            })


        return (
            React.createElement('div', {className: 'ContactView'},
                React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
                React.createElement('u1', {className: 'ContactView-list'}, contactItemElements),
                React.createElement(ContactForm, {
                    contact: this.props.newContact,
                    onChange: this.props.onContactChange,
                    onSubmit: this.props.onContactSubmit,
                })
            )
        );
    },
});

var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

function updateContact(contact) {
    setState({newContact: contact});
}

function submitContact() {
    var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});

    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }

    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    setState(
        Object.keys(contact.errors).length === 0 ? {
            newContact: Object.assign({}, CONTACT_TEMPLATE),
            contacts: state.contacts.slice(0).concat(contact),
        } : {newContact: contact}
    );
}

var state = {}

function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(
        React.createElement(ContactView, Object.assign({}, state, {
            onContactChange: updateContact,
            onContactSubmit: submitContact,
        })),
        document.getElementById('react-app')
    );
}

setState({
    contacts: [
        {key: 1, name: "James K Nelson", email: "james@jameskelelson.com", description: "Front-end Unicorn"},
        {key: 2, name: "Jim", email: "jim@example.com"},
        {key: 3, name: "Joe"}
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
});
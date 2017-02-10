var XContactsView = React.createClass({
  propTypes: {
    onChangeContact: React.PropTypes.func.isRequired,
    onSubmitContact: React.PropTypes.func.isRequired,

    contacts: React.PropTypes.array.isRequired,
    newContactForm: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'ContactsView'},
        React.createElement('h1', {className: 'ContactsView-title'}, "XContacts"),
        React.createElement('ul', {className: 'ContactsView-list'},
          this.props.xcontacts.map(function(contact) {
            return React.createElement(XContactItem, Object.assign(contact, {id: contact.key}))
          })),
        React.createElement(ContactForm, {
          value: this.props.newContactForm,
          onChange: this.props.onChangeContact,
          onSubmit: this.props.onSubmitContact,
        })
      )
    )
  },
});

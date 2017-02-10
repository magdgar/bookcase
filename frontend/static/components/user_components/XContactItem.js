var XContactItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'ContactItem'},
        React.createElement('a', {
          className: 'ContactItem-name',
          href: '#/contacts/'+this.props.id,
        }, this.props.login),
        React.createElement('div', {className: 'ContactItem-email'}, this.props.name + " " + this.props.surname ),
        React.createElement('div', {className: 'ContactItem-email'}, this.props.email)
      )
    )
  },
});
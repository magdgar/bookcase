// Constants
var CONTACT_TEMPLATE = {
  name: "",
  email: "",
  description: "",
  errors: null,
};

// Initial state
var state = {
  transitioning: false,
  location: null,
  contacts: [
    {key: '1', name: "Kotek", email: "james@example.com", description: "Front-end Unicorn"},
    {key: '2', name: "Jim", email: "jim@example.com"},
  ],
  xcontacts: [
    {key: '1', name: "Kotek", surname: "Maly", login: "Miauuuu", email: "james@example.com"},
    {key: '2', name: "Jim", surname: "Morris", login: "JMR", email: "jim@example.com"},
  ],
  contactForms: {},
  newContactForm: Object.assign({}, CONTACT_TEMPLATE),
};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);

  if (!state.transitioning) {
    ReactDOM.render(
      React.createElement(Application, state),
      document.getElementById('react-app')
    );
  }
}

// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);

// Set the initial route and render the app
navigated()

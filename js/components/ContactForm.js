var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      "form",
      { className: "contactForm" },

      React.createElement(
        "div",
        {
          className: "name"
        },

        React.createElement(
          "label",
          {
            htmlFor: this.props.contact.firstName
          },
          "Imię"
        ),

        React.createElement("input", {
          type: "text",
          placeholder: "...",
          value: this.props.contact.firstName
        })
      ),

      React.createElement(
        "div",
        {
          className: "surname"
        },
        React.createElement(
          "label",
          {
            htmlFor: this.props.contact.lastName
          },
          "Nazwisko"
        ),
        React.createElement("input", {
          type: "text",
          placeholder: "...",
          value: this.props.contact.lastName
        })
      ),

      React.createElement(
        "div",
        {
          className: "email"
        },
        React.createElement(
          "label",
          {
            htmlFor: this.props.contact.email
          },
          "mail"
        ),

        React.createElement("input", {
          type: "email",
          placeholder: "...",
          value: this.props.contact.email
        })
      ),

      React.createElement("button", { type: "submit" }, "Dodaj kontakt")
    );
  }
});

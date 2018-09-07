var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('div', {className: 'contactIcon'},
            React.createElement('img', {className: 'contactImage', src: 'https://image.flaticon.com/icons/svg/121/121956.svg', width: '40px', height: '40px' }),
          ),
          React.createElement('div', {className: 'contact'},
            React.createElement('div', {className: 'name'},
              React.createElement('p', {className: 'contactLabel'}, '' + this.props.item.firstName),
              React.createElement('p', {className: 'contactLabel'}, '' + this.props.item.lastName),
            ),
              React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email)
          ),
          React.createElement('div', {className: 'infoIcon'},
            React.createElement('img', {className: 'infoImage', src: 'https://image.flaticon.com/icons/svg/131/131917.svg', width: '20px', height: '20px' }),
          ),
        )
      )
    },
  });


 
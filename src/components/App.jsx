import { Component } from 'react';

export class App extends Component {
  state = {
    content: [],
  };

  show = evt => {
    evt.preventDefault();
    const newName = evt.target.elements.name.value;
    const newNumber = evt.target.elements.number.value;
    const newContact = { name: newName, number: newNumber };
    this.setState(prevState => ({
      content: prevState.content.concat(newContact),
    }));
  };
  render() {
    return (
      <>
        <form onSubmit={this.show}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <label>Number</label>
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <ul>
            {this.state.content.map(item => (
              <li key={item.name}>
                {item.name} - {item.number}
                <button type="button">delete</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

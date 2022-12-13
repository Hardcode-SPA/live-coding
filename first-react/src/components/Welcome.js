import React from "react";


// function Welcome(props) {
//   let inputValue = '';

//   function handleInput(evt) {
//     inputValue = evt.target.value;
//   }

//   return (
//     <div>
//       <h1>Hello, {props.name}! I heard, you're {props.age}...</h1>
//       <input type="text" onChange={handleInput}/>
//       <span>{inputValue}</span>
//     </div>
//   );
// }


class Welcome extends React.Component {
    // Konstruktor unserer Welcome-Klase (Welcome-Komponente)
    constructor(props) {
      // Aufruf des Konstruktors der Eltern-Klasse (React.Component)
      super(props);
  
      // Definition des "lokalen" States (Komponentenzustand aka Speicher)
      this.state = {
        inputValue: '',
        counter: 0
      };
  
      // this-Bindung der Methode handleInput an die Klassen-Instanz
      this.handleInput = this.handleInput.bind(this);
      // this-Bindung der Methode handlePlusClick an die Klassen-Instanz
      this.handlePlusClick = this.handlePlusClick.bind(this);
    }
  
    // ChangeHandler fuer Eingaben in das Eingabefeld der View
    // public class field syntax fuer Methode -> Loest das this-Bindungsproblem
    handleInput = (evt) => {
      // Gebe Aenderungen fuer den lokalen State durch
      this.setState({
        inputValue: evt.target.value
      });
  
      // Rufe das durch von der Eltern-Komponente 
      // durch die Props durchgegebene callback auf
      // und gebe Daten durch
      this.props.parentCallback(evt.target.value);
    }
  
    handlePlusClick(evt) {
      // Stateaenderung ist von bisherigem State abhaengig
      // Da diese Aenderungen asynchron ablaufen, kann es zu Unstimmigkeiten kommen
      // In solchen Situationen wird this.setState ein Callback zur Aenderung uebergeben,
      // das den State zur Zeit ihrer Ausfuehrung als Parameter uebergeben bekommt
      this.setState((state) => ({
        counter: state.counter + 1
      }));
    }
  
    // Render-Methode (muss es immer geben)
    // Gibt die View in JSX-Notation wieder
    render() {

      let header = <h1>Hello, {this.props.name}! I heard, you're {this.props.age}...</h1>;


      function NiceWeather(props) {
        return <h2>Gutes Wetter heute, oder {props.name}?</h2>
      }

      function BadWeather(props) {
        return <h2>Schietwedder heute, oder {props.name}?</h2>
      }

      let isGoodWeather = false;

      // Bedingte Darstellung mit Hilfe der ternaeren Operators
      let weatherGreeting = isGoodWeather ? <NiceWeather name="Peter" /> : <BadWeather name="Peter" />


      function Greeting(props) {
        if (!props.isLoggedIn) {
          return null;
        }

        return (
          <h2>Hello there!</h2>
        );
      }


      let ingredients = [
        "Tomatoes",
        "Potatoes",
        "Water",
        "Oil"
      ];

      // Generieren eines Arrays von JSX Elementen. 
      // WICHTIG: Die Elemente benoetigen einen eindeutigen Key. 
      // Moeglichst NICHT der Index im Array
      let ingredientItems = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

      return (
        <div>
          {/* Definiere h1, in das wir Daten aus den uns uebergebenen Props einfuegen */}
          {header}
  
          {/* Definiere input, dessen onChange auf handleInput-Methode der Klasse verweist */}
          <input type="text" value={this.state.inputValue} onChange={this.handleInput} />
  
          {/* Zeige im Span Daten aus dem veraenderbaren lokalen State an */}
          <span>{this.state.inputValue}</span>
  
  
          <p>
            <span>{this.state.counter}</span>
          </p>
          <button onClick={this.handlePlusClick}>+</button>


          {/* {weatherGreeting} */}

          {/* Bedingte Darstellung mit Hilfe des logischen UND Operators
          Wenn der erste der Bedingung false ist, wird der zweite nicht angezeigt */}
          {isGoodWeather && <NiceWeather name="Peter" />}

          <Greeting isLoggedIn={true} />

          {/* Einfuegen eines Arrays von JSX Elementen */}
          <ul>{ingredientItems}</ul>
        </div>
      );
    }
}

export default Welcome;
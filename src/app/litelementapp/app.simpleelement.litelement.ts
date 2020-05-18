import {LitElement, html, customElement, property, css} from 'lit-element';

// LitElement --> Base class for Element Creation
// encapulate, properties, styles, events, template
// Lifecycle management for Shadow-DOM

// html --> inline constant funcation that will be
// use for containing HTML template for rendering

// customElement --> inline constant function for
// defining the LiteElement so that parent can use it

const myStyle = css `
   input {
     color: yellow;
     background-color: red;
   }
`;

@customElement('simple-element')
export class SimpleElement extends LitElement{
  // define properties, to accept input
  // from the container
  @property({type: String}) name;

  // static properties declaration
  static get properties() {
    return {
        n1: {type: String},
        n2: {type: Number},
        n3: {type: Array},
        n4: {type: Object}
    };
   }


 // style getter
 static get styles() {
  return [
    myStyle,
    css `
      div {color: green; }
  ` ]
}

  constructor() {
    super();
    // this.name = "Polymer Web Component using Lit-Element";
   // this.n1 = 'Tejas';
    // this.n2 = 120;
    // this.n3 = ['A', 'B', 'C'];
    // this.n4 = {id: 101, name: 'P1'};
  }

  diplay() {
     // alert(`Value received ${this.name}`);
     const bubbleEvent = new CustomEvent('btn-click', {
       detail: {
         data: JSON.stringify("")
       },
       bubbles: true,
       composed: true
     });

     this.dispatchEvent(bubbleEvent);
  }



  render(){
    return html `
       <div>
          <h2> The Simple LitElement from Project-Polymer </h2>
          <div>
             <input type="button" value="Click" @click="${this.diplay}"/>
          </div>
          <div>
             <strong>
                Value Received for Name
                ${this.name.toUpperCase()}
             </strong>
             <br/>
          </div>
       </div>
    `;
  }
}

import {LitElement, html, customElement, property, css} from 'lit-element';
import { Event } from '@angular/router';

// LitElement --> Base class for Element Creation
// encapulate, properties, styles, events, template
// Lifecycle management for Shadow-DOM

// html --> inline constant funcation that will be
// use for containing HTML template for rendering

// customElement --> inline constant function for
// defining the LiteElement so that parent can use it

// const myStyle = css `
//    input {
//      color: yellow;
//      background-color: red;
//    }
// `;

@customElement('datagrid-element')
export class DataGridElement extends LitElement{
  // define properties, to accept input
  // from the container
  @property({type: Array}) DataSource = [];
    selectedRows: Array<any>;
    headers: Array<String>;

 // style getter
//  static get styles() {
//   return [
//     myStyle,
//     css `
//       div {color: green; }
//   ` ]
// }

  constructor() {
    super();
    this.selectedRows= new Array();
    this.headers = new Array<String>();
  }

  firstUpdated()
  {
    if(this.DataSource.length > 0 )
    {
        Object.keys(this.DataSource[0]).forEach((h) => {
            h = h.split('').map((c) => {
                if(c == c.toUpperCase()) 
                    c = " " + c;
                return c
            }).join('');
            this.headers.push(h)
        })
    } 
    this.performUpdate();
  }

  updateSelectedRows(event)
  {
    let value = event.target
    if(event.target.checked == true && !this.selectedRows.includes(value))
    {
        this.selectedRows.push(value)
    }
    else if(event.target.checked == false && this.selectedRows.includes(value))
    {
        this.selectedRows = this.selectedRows.filter((v) => v != value);
    }
  }
  deleteSelectedRows()
  {
    const deleteRowsEvent = new CustomEvent('delete-selected-rows', {
        detail: {
            data: this.selectedRows.map((v) => this.DataSource[v.value])
        },
        bubbles: true,
        composed: true
      });
      this.selectedRows.forEach((v) => { v.checked = false});
      this.dispatchEvent(deleteRowsEvent);
      this.selectedRows = [];
    }
    toggleCheckboxes(event)
    {

  }

  render(){
    return html `
    <h2>Dynamic Table using LitElement</h2>
    <div class="container">
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                    ${
                        this.headers.map((h) => {
                            return html `<th>${h}</th>`
                        })
                    }
                    <th><input type='checkbox' @change="${this.toggleCheckboxes}"></th>
                </tr>
            </thead>
            <tbody>
                    ${this.DataSource.map((row,i) => {
                        return html `<tr>${Object.values(row).map((data) => {
                            return html `<td>${data}</td>`                   
                        })}<td><input type='checkbox' .value="${i}" name=checkbox @change="${this.updateSelectedRows}"></td></tr>`
                    })}
            </tbody>
        </table>
        <input type=button value=Delete @click="${this.deleteSelectedRows}">
    </div>
    `;
  }
}

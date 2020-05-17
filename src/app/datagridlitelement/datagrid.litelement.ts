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

 static get styles() {
  return [
    css `
    table td,
    table th {
      border: 1px solid silver;
    }
    
    .headerSortDown:after,
    .headerSortUp:after {
      content: ' ';
      position: relative;
      left: 2px;
      border: 8px solid transparent;
    }

    .headerSortDown:hover,
    .headerSortUp:hover {
      background-color : lightgray;
      color:black;
    }
    
    .headerSortDown:after {
      top: 10px;
      border-top-color: gray;
    }
    
    .headerSortUp:after {
      bottom: 15px;
      border-bottom-color: gray;
    }
    
    .headerSortDown,
    .headerSortUp {
      padding-right: 10px;
    }
  ` ]
}

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
      ((this.renderRoot as ShadowRoot).querySelector('input[name="main-chkbox"]') as HTMLInputElement).checked = false;
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
      ((this.renderRoot as ShadowRoot).querySelector('input[name="main-chkbox"]') as HTMLInputElement).checked = false;
    }
    toggleCheckboxes(event)
    {
      var checkboxes = (this.renderRoot as ShadowRoot).querySelectorAll('input[name="chkbox"]');
      if(event.target.checked == true)
      {
        checkboxes.forEach((c) => {
          (c as HTMLInputElement).checked = true;
          this.updateSelectedRows({target : c})
        })
      }
      else{
      checkboxes.forEach((c) => {
        (c as HTMLInputElement).checked = false;
        this.updateSelectedRows({target : c})
      })
    }
    }
    sort(e)
    {
      let i = parseInt(e.target.id)
      this.DataSource = this.DataSource.sort((a, b) => {
        if(a[this.headers[i].toString()] < b[this.headers[i].toString()])
          return -1;
        else if (a[this.headers[i].toString()] > b[this.headers[i].toString()])
          return 1;
        return 0;
      })

      if(e.target.className == "headerSortDown")
      {
        e.target.className = "headerSortUp"
        this.DataSource.reverse();
      }
      else
        e.target.className = "headerSortDown";
      
      this.performUpdate();
    }

  render(){
    return html `
    <h2>Dynamic Table using LitElement</h2>
    <div>
        <table>
            <thead>
                <tr>
                    ${
                        this.headers.map((h,i) => {
                          h = h.split('').map((c) => {
                            if(c == c.toUpperCase()) 
                                c = " " + c;
                            return c
                        }).join('');
                            return html `<th class = 'headerSortDown' id="${i}" @click="${this.sort}">${h}</th>`
                        })
                    }
                    <th><input type='checkbox' name='main-chkbox' @change="${this.toggleCheckboxes}"></th>
                </tr>
            </thead>
            <tbody>
                    ${this.DataSource.map((row,i) => {
                        return html `<tr>${Object.values(row).map((data) => {
                            return html `<td>${data}</td>`                   
                        })}<td><input type='checkbox' name='chkbox' .value="${i}" @change="${this.updateSelectedRows}"></td></tr>`
                    })}
            </tbody>
        </table>
        <input type=button value=Delete @click="${this.deleteSelectedRows}">
    </div>
    `;
  }
}

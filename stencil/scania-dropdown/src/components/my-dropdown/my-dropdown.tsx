import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css'
})
export class MyDropdown {

  @Prop() placeholder: string = "Placeholder text";
  @State() placeholderText: string = this.placeholder;
  @State() placeholderValue: number = 0;
  @State() isOpened: boolean = false;

  toggleDropdown= () => {
    if (this.isOpened === true){
      this.isOpened = false;
    } else (
      this.isOpened = true
    )
  }

  dropdownToggleCSSClass = () => "dropdown-placeholder " + (this.isOpened ? "dropdown-placeholder--opened" : "");


  getDropdownValue = (event) => {
    this.placeholderText = document.getElementById("label_" + event.target.id).textContent;
    this.placeholderValue = event.target.value;
    this.isOpened = false;
  }

  componentDidUpdate() {
    console.log("New value is:" + document.getElementById("my-dropdown-placeholder").getAttribute("value"));
  }

  render() {
    return <div>
        <button id="my-dropdown-placeholder" class={this.dropdownToggleCSSClass()} onClick={this.toggleDropdown} value={this.placeholderValue}>
          <span class="placeholder-text">{this.placeholderText}</span>
          <span class="placeholder-arrow">
            <svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l5 5 5-5" stroke="#000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </button>
        <div class="dropdown-options">
          <input type="radio" id="option_1" name="distance" value="200000" data-text="<= 200 000 km" onChange={this.getDropdownValue} />
          <label id="label_option_1" htmlFor="option_1">{"<= 200 000 km"}</label>
          <input type="radio" id="option_2" name="distance" value="200001" data-text="> 200 000 km" onChange={this.getDropdownValue} />
          <label id="label_option_2" htmlFor="option_2">{"> 200 000 km"}</label>
        </div>
      </div>
  }
}

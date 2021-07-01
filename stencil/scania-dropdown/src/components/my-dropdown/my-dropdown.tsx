import { Component, Prop, h, State } from '@stencil/core';


@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {

  @Prop() placeholder: string = "Placeholder text";
  @State() isOpened: boolean = false;

  toggleDropdown= () => {
    if (this.isOpened === true){
      this.isOpened = false;
    } else (
      this.isOpened = true
    )
  }

  dropdownToggleCSSClass = () => "dropdown-placeholder " + (this.isOpened ? "dropdown-placeholder--opened" : "");

  render() {
    return <div>
        <button class={this.dropdownToggleCSSClass()} onClick={this.toggleDropdown}>
          <span class="placeholder-text">Test text</span>
          <span class="placeholder-arrow">SVG</span>
        </button>
        <div class="dropdown-options">
          <input type="radio" id="option_1" name="distance" value="200000" />
          <label htmlFor="option_1">{"<= 200 000 km"}</label>
          <input type="radio" id="option_2" name="distance" value="200001" />
          <label htmlFor="option_2">{"> 200 000 km"}</label>
        </div>
      </div>
  }
}

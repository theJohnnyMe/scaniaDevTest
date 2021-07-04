import { Component, Prop, h, State, Fragment } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: false,
})
export class MyDropdown {
  @Prop() placeholder: string = 'Placeholder text';
  @Prop() optionList: any[] = [
    { text: '<= 200000 km', value: '<= 200000' },
    { text: '> 200 000 km', value: '> 200 000' },
  ];
  @State() placeholderText: string = this.placeholder;
  @State() placeholderValue: number = 0;
  @State() isOpened: boolean = false;

  toggleDropdown = () => {
    this.isOpened = this.isOpened !== true;
  };

  dropdownToggleCSSClass = () =>
    'dropdown-placeholder ' + (this.isOpened ? 'dropdown-placeholder--opened' : '');

  handleOnChange = event => {
    this.placeholderText =
      event.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' km';
    this.placeholderValue = event.target.value;
    this.isOpened = false;
  };

  handleReset = () => {
    this.placeholderValue = 0;
    this.placeholderText = this.placeholder;
    this.isOpened = false;

    const selectedOption = document.querySelector('input[type=radio]:checked') as HTMLInputElement;
    if (selectedOption) {
      selectedOption.checked = false;
    }
  };

  render() {
    let mainContent = (
      <div class="dropdown-wrapper">
        <div class="dropdown">
          <button
            class={this.dropdownToggleCSSClass()}
            onClick={this.toggleDropdown}
            value={this.placeholderValue}
          >
            <span class="placeholder-text">{this.placeholderText}</span>
            <span class="placeholder-arrow">
              <svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l5 5 5-5"
                  stroke="#000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div class="dropdown-options">
            {this.optionList.map((item, index) => (
              <Fragment>
                <input
                  type="radio"
                  id={'option_' + index}
                  name="dropdownOptions"
                  value={item.value}
                  onChange={this.handleOnChange}
                />
                <label htmlFor={'option_' + index}>{item.text}</label>
              </Fragment>
            ))}
          </div>
        </div>
        <button class="dropdown-reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );

    return mainContent;
  }
}

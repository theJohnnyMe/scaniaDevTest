import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',
  shadow: false,
})
export class MyTable {
  @Prop() tableDataProp: any[] = [
    {
      driver: 'Marcus Lundberg',
      company: 'Aris FC',
      distance: 75044,
      score: 52,
    },
    {
      driver: 'Marcus Mena Pacheco',
      company: 'Lio LTD',
      distance: 129417,
      score: 95,
    },
    {
      driver: 'Valentine Ichtertz',
      company: 'LOTS Group',
      distance: 244656,
      score: 67,
    },
    {
      driver: 'Niklas Rosén',
      company: 'DD Interactive',
      distance: 200000,
      score: 78,
    },
  ];
  @State() tableDataState: any[] = this.tableDataProp;

  @Listen('dropdownSelectedOption', { target: 'body' })
  handleDropdownSelectedOption(event: CustomEvent<string>) {
    let valueReceived = event.detail;
    let conditionOperator = valueReceived.split(' ')[0];
    let conditionNumber = Number(valueReceived.split(' ')[1]);

    switch (conditionOperator) {
      case '<':
        this.tableDataState = this.tableDataProp.filter(item => {
          return item.distance < conditionNumber;
        });
        break;
      case '<=':
        this.tableDataState = this.tableDataProp.filter(item => {
          return item.distance <= conditionNumber;
        });
        break;
      case '=':
        this.tableDataState = this.tableDataProp.filter(item => {
          return (item.distance = conditionNumber);
        });
        break;
      case '>':
        this.tableDataState = this.tableDataProp.filter(item => {
          return item.distance > conditionNumber;
        });
        break;
      case '>=':
        this.tableDataState = this.tableDataProp.filter(item => {
          return item.distance >= conditionNumber;
        });
        break;
      default:
        this.tableDataState = this.tableDataProp;
    }
  }
  render() {
    let tableComponent = (
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Company</th>
            <th>Distance</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {this.tableDataState.map(item => (
            <tr key={item.id}>
              <td>{item.driver}</td>
              <td>{item.company}</td>
              <td>{item.distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return tableComponent;
  }
}

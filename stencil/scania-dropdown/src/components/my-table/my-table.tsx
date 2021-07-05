import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',
  shadow: false,
})
export class MyTable {
  @Prop() tableData: any[] = [
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
          {this.tableData.map(item => (
            <tr key={item.id}>
              <td>{item.driver}</td>
              <td>{item.company}</td>
              <td>{item.distance} km</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return tableComponent;
  }
}

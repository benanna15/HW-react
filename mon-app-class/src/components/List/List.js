import React, { Component } from 'react';

class List extends Component {
constructor(props) {
super(props);
this.state = {
list: [{id: 1,coursImportant: 'React js',},
{id: 2,coursImportant: 'html css',},
{id: 3,coursImportant: 'vanilla javascript',}]
};
}

render() {
const { list } = this.state;

return (
  <div className='la-liste'>
    <h1 className='list-title'>Liste des cours les plus importants</h1>
    {list.map((cours, index) => (
      <div className='list' key={index}>
        {cours.coursImportant}
      </div>
    ))}
  </div>
);
}
}

export default List;
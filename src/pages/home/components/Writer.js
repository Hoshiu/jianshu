import React, { PureComponent } from 'react';

class Writer extends PureComponent {
  render() {
    return (
      <div style={{textAlign: 'center', height: '300px', lineHeight: '300px', width: '278px', border: '1px solid #dcdcdc', borderRadius: '3px'}}>
        重复样式，懒得写了
      </div>
    )
  }
}

export default Writer;
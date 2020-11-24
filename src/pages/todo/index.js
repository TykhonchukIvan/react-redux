import React from 'react';
import './todo.less'

import {MenuFoldOutlined} from '@ant-design/icons'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={'todo'}>
        <div className={'todo__sidebar'}>
          <ul className='todo__list'>
            <li>
              <MenuFoldOutlined/> <span>Все задачи</span>
            </li>
          </ul>
        </div>
        <div className={'todo__tasks'}>
        </div>
      </div>
    )
  }
}
import React from 'react';
import { EditTask } from '../Modals/EditTask';
import { useState } from 'react';

export const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="card-wrapper mr-5" style={{ margin: '10px' }}>
      <div className="card-top" style={{ backgroundColor: '#282C34' }}></div>

      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: '#F2FAF1', borderRadius: '10px' }}
        >
          {taskObj.Name}
        </span>

        <p
          className="mt-3"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '100px',
            wordWrap: 'break-word',
          }}
        >
          {taskObj.Description}
        </p>

        <div
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
          }}
        >
          <i
            className="far fa-edit mr-3"
            style={{
              color: '#282C34',
              cursor: 'pointer',
              marginRight: '10px',
            }}
            onClick={() => setModal(true)}
          ></i>

          <i
            className="fas fa-trash-alt"
            style={{
              color: '#282C34',
              cursor: 'pointer',
              marginLeft: '2px',
            }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>

      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

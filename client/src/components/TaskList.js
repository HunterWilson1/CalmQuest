import React, { useState } from 'react';
import TaskItem from './TaskItem';
//import { useQuery } from '@apollo/client';
// USE useQuery TO GET TASKS AND DISPLAY DATA TO THE MAPPED RETURN
//import { useQuery } from '@apollo/client';
//import {GET_TASKS} from "../utils/queries"
//const { radnom } = require('../utils/randomizer')



const TaskList = () => {
  const tasks = ['Message Loved Ones', 'Make Your Bed', 'Take a Walk', 'Breathing Exercise'];
  //const { data } = useQuery(GET_TASKS)
  //const tasks = data.tasks;
  //const randomTasks = random(tasks)
  const [checkedTasks, setCheckedTasks] = useState(Array(tasks.length).fill(false));
  
  return (
    <ul className="mb-6 mx-auto w-1/2">
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          checkedTasks={checkedTasks} 
          setCheckedTasks={setCheckedTasks} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
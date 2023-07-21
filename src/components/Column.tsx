import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import useColumnTasks from '../hooks/useColumnTasl';
import { ColumnType } from '../utils/enums';
import Task from './Task';

function Colum({ column }: { column: ColumnType }) {

  const { tasks, addEmptyTask, swapTasks, updateTask, deleteTask } = useColumnTasks(column)

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  return (
    // <Row gutter={16} justify={"center"}>
    //   <Col span={3}>
    <div className="col-item">
      {ColumnTasks}
      <Button block icon={<PlusOutlined />} onClick={addEmptyTask}>Add Task</Button>
    </div>
    //   </Col>
    // </Row>
  )
}

export default Colum
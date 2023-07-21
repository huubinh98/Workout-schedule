import { memo } from 'react'
import { TaskModel } from '../utils/models';
import _ from 'lodash';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({ index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete, }: TaskProps) {

  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover,
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  return (
    <div ref={ref} className='task-item' style={{ opacity: isDragging ? '0.5' : '1' }}>
      <TextArea onChange={handleTitleChange} value={task.title} style={{ flex: '1' }} />
      <Button icon={<DeleteOutlined />}
        onClick={handleDeleteClick}
      />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});
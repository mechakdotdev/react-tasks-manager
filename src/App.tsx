import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import { FC } from 'react'
import TaskList from './components/distinct/task/task-list'
import Project from './components/distinct/project/project'
import { MockTasks } from './mock/mock-tasks'

const App: FC = () => {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/tasks" element={<TaskList tasks={MockTasks} />} />
        <Route path="/project/:id" element={<Project />}>
          <Route index element={<h1>Show</h1>}></Route>
          <Route path="edit" element={<h1>Show</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Row } from 'antd'
import Column from './components/Column'
import Header from './components/Header'
import { ColumnType } from './utils/enums'

function App() {
  return (
    <>
      <Header />
      <Row gutter={16} justify={"center"}>
        <Col span={3}>
          <Column column={ColumnType.MON} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.TUE} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.WED} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.THU} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.FIR} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.SAT} />
        </Col>
        <Col span={3}>
          <Column column={ColumnType.SUN} />
        </Col>
      </Row>
    </>
  )
}

export default App

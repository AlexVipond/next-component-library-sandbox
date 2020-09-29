import React, { ChangeEvent, useState } from 'react'
import {
  Input,
  Select,
  Button,
  Modal,
  Typography,
} from 'antd'
import products from '../products'

const { Option } = Select,
      { TextArea } = Input,
      { Paragraph, Text } = Typography


export default function AntDefault () {
  const [shortMessage, setShortMessage] = useState(''),
        [longMessage, setLongMessage] = useState(''),
        [selected, setSelected] = useState<any>(products[0]),
        [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <>
      {/* <div className="flex">
        <Input
          placeholder="Type a short message"
          value={shortMessage}
          onChange={({ target: { value } }) => setShortMessage(value)}
        />
        <div className="ml-2">
          <Button type="default">
            Save
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <TextArea
          placeholder="Type a long message"
          value={longMessage}
          onChange={({ target: { value } }) => setLongMessage(value)}
        />
        <div className="mt-2">
          <Button type="primary">
            Send
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <div>
          <label>Pick one:</label>
        </div>
        <Select 
          defaultValue={selected}
          onChange={value => setSelected(value)}
        >
          {products.map(product => 
            <Option
              key={product}
              value={product}
            >
              {product}
            </Option>
          )}
        </Select>
      </div>
      <div className="mt-8">
        <Button
          type="default"
          onClick={() => setModalIsVisible(true)}
        >
          Open dialog
        </Button>
        <Modal
          visible={modalIsVisible}
          onOk={() => setModalIsVisible(false)}
          onCancel={() => setModalIsVisible(false)}
        >
          <div className="p-6 max-w-3 w-full">
            <Paragraph>
              Click outside, press escape, or press the button to close (it's focused by default).
            </Paragraph>
            <div className="mt-2">
              <Button type="default" danger onClick={() => setModalIsVisible(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div> */}
    </>
  )
}

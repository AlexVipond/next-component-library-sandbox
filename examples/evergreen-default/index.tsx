import React, { useState } from 'react'
import {
  Pane,
  Paragraph,
  Button,
  TextInput,
  Textarea,
  SelectMenu,
  Dialog,
} from 'evergreen-ui'
import products from '../products'

export default function EvergreenDefault () {
  const [shortMessage, setShortMessage] = useState(''),
        [longMessage, setLongMessage] = useState(''),
        [selected, setSelected] = useState(products[0]),
        [dialogIsShown, setDialogIsShown] = useState(false)

  return (
    <Pane>
      <Pane className="flex">
        <TextInput
          placeholder="Type a short message"
          value={shortMessage}
          onChange={({ target: { value } }) => setShortMessage(value)}
        />
        <Pane className="ml-2">
          <Button appearance="primary" intent="success">
            Save
          </Button>
        </Pane>
      </Pane>
      <Pane className="mt-8">
        <Textarea
          placeholder="Type a long message"
          value={longMessage}
          onChange={({ target: { value } }) => setLongMessage(value)}
        />
        <Pane className="mt-2">
          <Button appearance="primary" intent="none">
            Send
          </Button>
        </Pane>
      </Pane>
      <Pane className="mt-8">
        <Pane>
          <Paragraph>Pick one:</Paragraph>
        </Pane>
        <SelectMenu
          isMultiSelect={false}
          onSelect={({ value }: { label: string, value: string }) => setSelected(value)}
          selected={selected}
          options={products.map(product => ({ label: product, value: product }))}
        >
          <Button>{selected || 'Select product...'}</Button>
        </SelectMenu>
      </Pane>
      <Pane className="mt-8">
        <Button onClick={() => setDialogIsShown(true)}>Open dialog</Button>
        <Dialog isShown={dialogIsShown} onCloseComplete={() => setDialogIsShown(false)}>
          <Pane className="p-6 max-w-3 w-full">
            <Paragraph>
              Click outside, press escape, or press any button to close.
            </Paragraph>
            <Pane className="mt-2">
              <Button appearance="primary" intent="success" onClick={() => setDialogIsShown(false)}>
                Close
              </Button>
            </Pane>
          </Pane>
        </Dialog>
      </Pane>
    </Pane>
  )
}

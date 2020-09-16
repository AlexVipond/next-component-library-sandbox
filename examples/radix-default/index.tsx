import React, { useState } from 'react'
import {
  RadixProvider,
  Box,
  Text,
  Button,
  Input,
  Textarea,
  Select,
  Dialog,
  Option
} from '@modulz/radix'
import products from '../products'

export default function RadixDefault () {
  const [shortMessage, setShortMessage] = useState(''),
        [longMessage, setLongMessage] = useState(''),
        [selected, setSelected] = useState(products[0]),
        [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <RadixProvider>
      <Box className="flex">
        <Input
          placeholder="Type a short message"
          value={shortMessage}
          onChange={({ target: { value } }) => setShortMessage(value)}
        />
        <Box className="ml-2">
          <Button variant="green">
            Save
          </Button>
        </Box>
      </Box>
      <Box className="mt-8">
        <Textarea
          placeholder="Type a long message"
          value={longMessage}
          onChange={({ target: { value } }) => setLongMessage(value)}
        />
        <Box className="mt-2">
          <Button variant="blue">
            Send
          </Button>
        </Box>
      </Box>
      <Box className="mt-8">
        <Box>
          <Text as="label">Pick one:</Text>
        </Box>
        <Select onValueChange={(value) => setSelected(value)}>
          {products.map(product => 
            <Option
              key={product}
              value={product}
              label={product} 
            />
          )}
        </Select>
      </Box>
      <Box className="mt-8">
        <Button onClick={() => setDialogIsOpen(true)}>Open dialog</Button>
        <Dialog isOpen={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
          <Box className="p-6 max-w-3 w-full">
            <Text as="p">
              Click outside, press escape, or press the button to close (it's focused by default).
            </Text>
            <Box className="mt-2">
              <Button variant="red" onClick={() => setDialogIsOpen(false)}>
                Close
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </RadixProvider>
  )
}

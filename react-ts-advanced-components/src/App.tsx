import { useRef, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Form from './components/Form';

function App() {
  // const [count, setCount] = useState(0)
  const guestName = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown){
    const extractedData = data as { name: string; address: string; }
    console.log(extractedData);
  }

  return (
    <>
      <main>
        <Form onSave={handleSave}>
          <Input label='Your Name' id='name' type='text' ref={guestName}
          />
          <Input label='Your Address' id='address' type='number' />
          {/* <Button el='Anchor' href='http://google.com' target='_blank' className='button'>This is a Link</Button> */}
          <Button el='button' type='submit' className='button'>Save</Button>
        </Form>
      </main>
    </>
  )
}

export default App;

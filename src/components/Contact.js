import { Form, redirect, useActionData } from 'react-router-dom'
import './Contact.css'


export default function Contact() {
  const actionData = useActionData()        // route action return value

  return (
    <div>
      <p> This is the Contact page </p>
      {/* the action specifies the frontend route (this is not the submit route) */}
      <Form
        method='post'
        action='/help/contact'
        className='contactForm'
      >
        <label>
          <p> Email: </p>
          <input type='email' name='email' required />    {/* form fields must have names in order to identify them in the route action */}
        </label>
        <label>
          <p> Message: </p>
          <textarea name='message' required />
        </label>
        {actionData && actionData.error && <p className='error'>{actionData.error}</p>}
        <button>Submit</button>
      </Form>
    </div>
  )
}

// here we can do validation and posting the form data to the server
export async function contactAction({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')

  if (message.length < 10) {
    return { error: 'Message must be at least 10 character long' }
  }

  // successfully sent to the server...
  return redirect('/')        // redirect to home
}

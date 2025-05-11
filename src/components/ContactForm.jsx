import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', license: '', message: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Form submitted!')
  }

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input name="name" type="text" placeholder="Name" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input name="company" type="text" placeholder="Company" onChange={handleChange} className="w-full p-3 border rounded" required />
        <select name="license" onChange={handleChange} className="w-full p-3 border rounded" required>
          <option value="">Select License Type</option>
          <option value="os">Operating System</option>
          <option value="dev">Developer Tool</option>
          <option value="security">Security Software</option>
        </select>
        <textarea name="message" placeholder="Message" rows="4" onChange={handleChange} className="w-full p-3 border rounded" required />
        <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
    </section>
  )
}
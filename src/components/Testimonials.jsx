export default function Testimonials() {
  const reviews = [
    { name: "Jane Doe", role: "IT Manager", company: "TechCorp", quote: "SoftSell helped us turn unused licenses into revenue effortlessly!" },
    { name: "John Smith", role: "Procurement Lead", company: "SoftTech", quote: "Highly recommend SoftSell for fast and secure transactions." }
  ]
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 border rounded shadow-sm">
            <p className="italic">“{review.quote}”</p>
            <p className="mt-4 font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.role}, {review.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
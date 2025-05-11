import { TrophyIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline'

export default function WhyChooseUs() {
  const points = [
    { icon: <TrophyIcon className="h-10 w-10 text-green-500" />, text: "Best market prices" },
    { icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />, text: "Secure transactions" },
    { icon: <BoltIcon className="h-10 w-10 text-green-500" />, text: "Fast processing" },

  ]
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8">
       
        {points.map((point, index) => (
          <div key={index} className="flex flex-col items-center">
            {point.icon}
            <p className="mt-4 font-medium text-gray-700">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
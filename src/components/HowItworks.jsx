import { CloudArrowUpIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

export default function HowItWorks() {
  const steps = [
    { icon: <CloudArrowUpIcon className="h-12 w-12 text-blue-500" />, title: "Upload License" },
    { icon: <ChartBarIcon className="h-12 w-12 text-blue-500" />, title: "Get Valuation" },
    { icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-500" />, title: "Get Paid" }
  ]
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {step.icon}
            <p className="mt-4 text-lg font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
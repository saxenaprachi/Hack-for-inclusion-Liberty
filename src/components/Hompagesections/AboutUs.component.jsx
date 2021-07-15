/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Improving Reach',
    description:
      'Easy accessiblitity increases reach',
    icon: GlobeAltIcon,
  },
  {
    name: 'Every one is Equal',
    description:
      'Liberty insures equality for everyone and gender, race inclusion',
    icon: ScaleIcon,
  },
  {
    name: 'Filters are instant',
    description:
      'Baised information removal filters are fast and instant',
    icon: LightningBoltIcon,
  },
  {
    name: 'Contact Us',
    description:'In case of any confusion or doubt we can be easily contacted.',
    icon: AnnotationIcon,
  },
]

export default function AboutUs() {
  return (
    <div className=" mt-36 bg-white" id='aboutus'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-12 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Liberty, is a company that wants to support your buisness be baisis free, in hiring, team building and employee interaction
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className=" ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="
             dark:text-gray-100
            text-gray-900 text-3xl
            tracking-tight
            font-bold
          "
        >
          Social Media
        </p>
        <p
          class="mt-3
        max-w-md
        mx-auto
        text-base text-gray-500
        dark:text-gray-400
        sm:text-lg
        md:mt-5
        md:text-xl
        md:max-w-3xl
        cursor-default"
        >
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
          sm:text-6xl
          flex
          justify-around
          text-4xl
          "
        >
          <a href="https://www.youtube.com/codeiiest" target="_blank" class="hover:text-red-500 hover:shadow-red-700 dark:hover:shadow-red-400 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-120">
            <carbon-logo-youtube />
          </a>
          <a
            href="https://github.com/CodeIIEST-dev"
            target="_blank"
            class="hover:shadow dark:hover:shadow-gray-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-120"
          >
            <carbon-logo-github />
          </a>
          <a
            href="https://twitter.com/codeiiest"
            target="_blank"
            class="hover:text-blue-600 hover:shadow-blue-700 dark:hover:shadow-blue-400 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-120"
          ><carbon-logo-twitter />
          </a>
          <a
            href="https://www.facebook.com/CodeIIEST"
            target="_blank"
            class="hover:text-blue-500 hover:shadow-blue-700 dark:hover:shadow-blue-400 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-120"
          ><carbon-logo-facebook />
          </a>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>

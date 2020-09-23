import { defaultTheme } from 'evergreen-ui'

// console.log(defaultTheme)

export default {
  ...defaultTheme,

  // Input
  getTextInputClassName (appearance) {
    return 'form-input hover:border-blue-40 transition duration-3'
  },

  // Textarea
  getTextareaClassName (appearance) {
    return 'form-textarea hover:border-blue-40 transition duration-3'
  },

  // Button
  getButtonClassName (appearance, intent) {
    const base = '\
            transition duration-3 ease-in-out\
            hover:shadow-5 focus:shadow-5 active:shadow-4\
            transform\
            hover:scale-110 focus:scale-110 active:scale-100\
          ',
          variant = (() => {
            switch (`${appearance} ${intent}`) {
              case 'primary none':
                return 'bg-blue-60 text-blue-10'
              case 'primary success':
                return 'bg-green-60 text-green-10'
              case 'primary warning':
                return 'bg-orange-60 text-orange-10'
              case 'primary danger':
                return 'bg-red-60 text-red-10'

              case 'default none':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'default success':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'default warning':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'default danger':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'

              case 'minimal none':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'minimal success':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'minimal warning':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
              case 'minimal danger':
                return 'bg-transparent border-gray-40 border-4 text-gray-90'
            }
          })()

    return trimmed(`${base} ${variant}`)
  }
}

function trimmed (className) {
  console.log()
  return className.replace(/\n/g, ' ').replace(/\s{1,}/g, ' ').trim()
}

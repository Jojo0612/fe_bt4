module.exports = {
  content: [
    "./*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
  },
}
// module.exports = {
//   theme: 
//   {
//     fontSize: {
//       '2xl': ['48px',{
//         lineHeight: '64px',
//         letterSpacing: '0px',
//         fontWeight: '300',
//       }],
//       title: ['24px',{
//         lineHeight: '32px',
//         letterSpacing: '0px',
//         fontWeight: '300',
//       }],
//       body: ['18px',{
//         lineHeight: '32px',
//         letterSpacing: '0px',
//         fontWeight: '100',
//       }],
//       caption: ['14px',{
//         lineHeight: '24px',
//         letterSpacing: '0px',
//         fontWeight: '100',
//       }],
//     }
//   }
// }
// module.exports = {
//   theme: {
//     fontWeight: {
//       thin: '100',
//       hairline: '100',
//       extralight: '200',
//       light: '300',
//       normal: '400',
//       medium: '500',
//       semibold: '600',
//       bold: '700',
//       extrabold: '800',
//       'extra-bold': '800',
//       black: '900',
//     }
//   }
// }
// module.exports = {
//   theme: {
//     fontSize: {
//       sm: ['14px', '24px'],
//       base: ['18px', '24px'],
//       lg: ['24px', '32px'],
//       xl: ['48px', '64px'],
//     }
//   }
// }
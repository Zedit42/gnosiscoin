/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['var(--font-karla)'],
        lora: ['var(--font-lora)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px) ' 
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
        },
      },
      animation: {
        'fade' : 'fade-in-up 0.5s ease-in ',
      },
    },
  },
  
}

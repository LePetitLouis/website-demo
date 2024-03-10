import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'white-medium': '#F9FAFC',
        black: '#121212'
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      animation: {
        'slide-up': 'slide-up 15s linear infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '3%, 10%': { transform: 'translateY(0)' },
          '15%, 25%': { transform: 'translateY(-100%)' },
          '30%, 40%': { transform: 'translateY(-200%)' },
          '45%, 55%': { transform: 'translateY(-300%)' },
          '60%, 70%': { transform: 'translateY(-400%)' },
          '75%, 85%': { transform: 'translateY(-500%)' },
          '90%, 100%': { transform: 'translateY(-600%)' },
        },
        // 'slide-up': {
        //   '0%, 15%': { transform: 'translateY(0)' },
        //   '20%, 35%': { transform: 'translateY(-100%)' },
        //   '40%, 55%': { transform: 'translateY(-200%)' },
        //   '60%, 75%': { transform: 'translateY(-300%)' },
        //   '80%, 100%': { transform: 'translateY(-400%)' },
        // }
      },
    }
  }
}
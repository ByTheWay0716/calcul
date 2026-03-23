module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your paths here
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here
      },
      colors: {
        border: '#yourBorderColor',
        input: '#yourInputColor',
        ring: '#yourRingColor',
        background: '#yourBackgroundColor',
        foreground: '#yourForegroundColor',
        primary: '#yourPrimaryColor',
        secondary: '#yourSecondaryColor',
        destructive: '#yourDestructiveColor',
        muted: '#yourMutedColor',
        accent: '#yourAccentColor',
        popover: '#yourPopoverColor',
        card: '#yourCardColor',
        neon: '#yourNeonColor',
      },
      borderRadius: {
        // Add your border radius configuration
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Add tailwindcss-animate plugin
  ],
};

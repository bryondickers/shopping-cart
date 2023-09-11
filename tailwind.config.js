/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      white:"hsl(var(--white))",
      dark: "hsl(var(--dark))",
      lightGrey: "hsl(var(--light-grey))",
      grey: "hsl(var(--grey))",
      blue: "hsl(var(--blue))",
      darkBlue: "hsl(var(--dark-blue))",
      cream:"hsl(var(--cream))",
      purple:"hsl(var(--total-blue))",
      lineColor:"hsl(var(--line-color))",
      totalsGrey:"hsl(var(--total-bg))",
      successColor:"hsl(var(--success))"
    },
    fontFamily: {
      sansFont: "'DM Sans', sans-serif",
      frauncesFont: "'Fraunces', serif",
      montserratFont: "'Montserrat', sans-serif"
    },
    extend: {},
  },
  plugins: [],
};

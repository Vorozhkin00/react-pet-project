import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      primary: '#000000',
      blue: '#377DFF',
      green: '#38CB89',
      orange: '#FFAB00',
      red: '#FF5630',
      neutral: {
        100: '#FEFEFE',
        200: '#F3F5F7',
        300: '#E8ECEF',
        400: '#6C7275',
        500: '#343839',
        600: '#232627',
        700: '#141718',
      },
    },
    fontSize: {
      hero: ['96px', {lineHeight: '96px', fontWeight: 500}],
      headline1: ['80px', {lineHeight: '84px', fontWeight: 500}],
      headline2: ['72px', {lineHeight: '76px', fontWeight: 500}],
      headline3: ['54px', {lineHeight: '58px', fontWeight: 500}],
      headline4: ['40px', {lineHeight: '44px', fontWeight: 500}],
      headline5: ['34px', {lineHeight: '38px', fontWeight: 500}],
      headline6: ['28px', {lineHeight: '34px', fontWeight: 500}],
      headline7: ['20px', {lineHeight: '28px', fontWeight: 500}],
      body1: ['20px', {lineHeight: '32px'}],
      body1Semi: ['20px', {lineHeight: '28px', fontWeight: 600}],
      body1Bold: ['20px', {lineHeight: '28px', fontWeight: 700}],
      body2: ['16px', {lineHeight: '26px'}],
      body2Semi: ['16px', {lineHeight: '26px', fontWeight: 600}],
      body2Bold: ['16px', {lineHeight: '26px', fontWeight: 700}],
      caption1: ['14px', {lineHeight: '22px'}],
      caption1Semi: ['14px', {lineHeight: '22px', fontWeight: 600}],
      caption1Bold: ['14px', {lineHeight: '22px', fontWeight: 700}],
      caption2: ['12px', {lineHeight: '20px'}],
      caption2Semi: ['12px', {lineHeight: '20px', fontWeight: 600}],
      caption2Bold: ['12px', {lineHeight: '20px', fontWeight: 700}],
      hairline1: ['16px', {lineHeight: '16px', fontWeight: 700}],
      hairline2: ['12px', {lineHeight: '12px', fontWeight: 700}],
      buttonsXs: ['14px', {lineHeight: '24px', fontWeight: 500}],
      buttonsS: ['16px', {lineHeight: '28px', fontWeight: 500}],
      buttonsM: ['18px', {lineHeight: '32px', fontWeight: 500}],
      buttonsL: ['22px', {lineHeight: '34px', fontWeight: 500}],
      buttonsXl: ['26px', {lineHeight: '38px', fontWeight: 500}],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
        mono: ['var(--font-outfit)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// import type {Config} from "tailwindcss";
//
// const {createGlobPatternsForDependencies} = require('@nx/react/tailwind');
// const {join} = require('path')
// const config: Config = {
//   // content: [
//   //   "./src/**/*.{js,jsx,ts,tsx}",
//   // ],
//   // content: [
//   //   join(
//   //     __dirname,
//   //     '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
//   //   ),
//   //   ...createGlobPatternsForDependencies(__dirname),
//   // ],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     colors: {
//       primary: '#000000',
//       blue: '#377DFF',
//       green: '#38CB89',
//       orange: '#FFAB00',
//       red: '#FF5630',
//       neutral: {
//         100: '#FEFEFE',
//         200: '#F3F5F7',
//         300: '#E8ECEF',
//         400: '#6C7275',
//         500: '#343839',
//         600: '#232627',
//         700: '#141718',
//       },
//     },
//     fontSize: {
//       hero: ['96px', {lineHeight: '96px', fontWeight: 500}],
//       headline1: ['80px', {lineHeight: '84px', fontWeight: 500}],
//       headline2: ['72px', {lineHeight: '76px', fontWeight: 500}],
//       headline3: ['54px', {lineHeight: '58px', fontWeight: 500}],
//       headline4: ['40px', {lineHeight: '44px', fontWeight: 500}],
//       headline5: ['34px', {lineHeight: '38px', fontWeight: 500}],
//       headline6: ['28px', {lineHeight: '34px', fontWeight: 500}],
//       headline7: ['20px', {lineHeight: '28px', fontWeight: 500}],
//       body1: ['20px', {lineHeight: '32px'}],
//       body1Semi: ['20px', {lineHeight: '28px', fontWeight: 600}],
//       body1Bold: ['20px', {lineHeight: '28px', fontWeight: 700}],
//       body2: ['16px', {lineHeight: '26px'}],
//       body2Semi: ['16px', {lineHeight: '26px', fontWeight: 600}],
//       body2Bold: ['16px', {lineHeight: '26px', fontWeight: 700}],
//       caption1: ['14px', {lineHeight: '22px'}],
//       caption1Semi: ['14px', {lineHeight: '22px', fontWeight: 600}],
//       caption1Bold: ['14px', {lineHeight: '22px', fontWeight: 700}],
//       caption2: ['12px', {lineHeight: '20px'}],
//       caption2Semi: ['12px', {lineHeight: '20px', fontWeight: 600}],
//       caption2Bold: ['12px', {lineHeight: '20px', fontWeight: 700}],
//       hairline1: ['16px', {lineHeight: '16px', fontWeight: 700}],
//       hairline2: ['12px', {lineHeight: '12px', fontWeight: 700}],
//       buttonsXs: ['14px', {lineHeight: '24px', fontWeight: 500}],
//       buttonsS: ['16px', {lineHeight: '28px', fontWeight: 500}],
//       buttonsM: ['18px', {lineHeight: '32px', fontWeight: 500}],
//       buttonsL: ['22px', {lineHeight: '34px', fontWeight: 500}],
//       buttonsXl: ['26px', {lineHeight: '38px', fontWeight: 500}],
//     },
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;



import {
  createTheme,
  // ThemeOptions
} from '@nelnet/unifi-components-react';

const globalLayoutStyles = {
  // strongly recommended
  body: {
    minHeight: '100vh',
    // required for default starter layout
    // to accommodate AppNavDrawer
    '& #root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  },
};

const extendedUnifi = {
  themeName: 'Unifi Extended',
  overrides: {
    MuiCssBaseline: {
      '@global': { ...globalLayoutStyles },
    },
  },
};
const unifiTheme = createTheme(extendedUnifi);

// const customThemeOptions = {
//   themeName: 'Custom Palette',
//   palette: {
//     primary: {
//       main: '#AF3A69',
//     },
//     secondary: {
//       main: '#214D8F',
//     },
//   },
//   overrides: {
//     MuiCssBaseline: {
//       // NOTE: styles will have much less specificity than component styles
//       // Consider custom styling on functional components using createStyles()
//       '@global': {
//         ...globalLayoutStyles,
//         // scope to first content inside main to not affect nested components
//         'main > h2:first-child, main > div > div > h2': {
//           // Will apply if no other margin-affecting props are added like gutterBottom or margin
//           marginBottom: `${unifiTheme.spacing(4)}px`,
//           // Bump size of screen title on standard template
//           '&:first-child': {
//             fontSize: '5rem !important',
//           },
//         },
//       },
//     },
//     MuiAppBar: {
//       colorPrimary: {
//         backgroundColor: '#85285B',
//       },
//     },
//   },
// } as ThemeOptions;

// Use default Unifi
const theme = unifiTheme;

// Use custom theme
// const theme = createTheme(customThemeOptions);

export default theme;

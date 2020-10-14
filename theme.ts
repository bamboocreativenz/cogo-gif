export default {
  breakpoints: ['480px', '768px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 14, 16, 24, 32],
  maxWidth: 1400, // TODO: a conventional way to do this?
  colors: {
    text: '#303A3E',
    grey: '#7d7d7d',
    lighterGrey: '#DEDEDE',
    background: '#fff',
    eggshell: '#e2e3d1',
    platinum: '#e9e9e9',
    cream: '#f1f1e6',
    pigmentGreen: '#19a44b',
    pistachio: '#a4d784',
    emerald: '#5ab373',
    jungle: '#01a17a',
    aubergine: '#544d60',
    warmGray: '#C8CBB6',
    grapefruit: '#f9adaa',
    copper: '#a77a76',
    paleYellow: '#f7d488',
    orange: '#f9a03f',
    tomato: '#cf4718'
  },
  fonts: {
    body: '"Montserrat", system-ui, sans-serif',
    heading: '"Montserrat", sans-serif'
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      color: 'background',
      bg: 'pigmentGreen',
      '&:hover': {
        bg: 'pistachio'
      },
      cursor: 'pointer',
      borderRadius: 50
    },
    primaryRed: {
      fontFamily: 'body',
      color: 'tomato',
      bg: 'background',
      borderRadius: 50,
      borderColor: 'tomato',
      borderWidth: 2,
      borderStyle: 'solid',
      '&:hover': {
        // borderColor: ''
        opacity: 0.7
      },
      cursor: 'pointer'
    },
    secondary: {
      fontFamily: 'body',
      color: 'pigmentGreen',
      bg: 'background',
      cursor: 'pointer',
      borderRadius: 50,
      borderColor: 'pigmentGreen',
      borderWidth: 2,
      borderStyle: 'solid',
      '&:hover': {
        // color: 'pistachio',
        borderColor: 'pistachio'
      }
    },
    tertiary: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7
      }
    },
    tertiaryRed: {
      fontFamily: 'body',
      color: 'tomato',
      bg: 'background',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7
      }
    },
    disabled: {
      fontFamily: 'body',
      bg: 'grey', // TODO: choose a better colour
      cursor: 'auto',
      borderRadius: 50
    },
    tertiaryDisabled: {
      fontFamily: 'body',
      bg: 'background',
      color: 'grey',
      cursor: 'auto'
    }
  },
  text: {
    default: {
      fontSize: 2,
      color: 'text'
    },
    small: {
      fontSize: 1,
      color: 'text'
    },
    xsmall: {
      fontSize: 0,
      color: 'text'
    },
    heading: {
      fontWeight: 500,
      fontSize: 3,
      color: 'pigmentGreen'
    },
    subHeading: {
      fontWeight: 500,
      fontSize: 2,
      color: 'text'
    }
  },
  styles: {
    root: {
      fontFamily: 'body'
    },
    a: {
      cursor: 'pointer'
    }
  },
  links: {
    nav: {
      color: 'grey',
      '&:hover': {
        color: 'pigmentGreen'
      },
      cursor: 'pointer'
    }
  },
  forms: {
    input: {
      fontFamily: 'body'
    },
    textarea: {
      fontFamily: 'body'
    },
    label: {
      fontFamily: 'body',
      fontWeight: 500,
      fontSize: 1
    }
  }
}

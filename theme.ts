export default {
  breakpoints: ['480px', '768px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 384, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 384, 512],
  fontSizes: [10, 14, 18, 24, 28, 32, 36, 38, 52],
  maxWidth: 1400, // TODO: a conventional way to do this?
  colors: {
    text: '#333333',
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
  text: {
    default: {
      fontSize: 2,
      color: 'text'
    },
    h1: {
      fontSize: [32, 38],
      fontWeight: 800,
      color: 'text'
    },
    h2: {
      fontSize: 28,
      fontWeight: 800,
      color: 'text'
    },
    h3: {
      fontSize: 14,
      fontWeight: 600,
      fontStyle: 'italic',
      color: 'text'
    },
    p1: {
      fontSize: 24,
      fontWeight: 500,
      color: 'text'
    },
    p2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 28,
      color: 'text'
    },
    p3: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 22,
      color: 'text'
    },
    p4: {
      fontSize: 18,
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 22,
      color: 'text'
    },
    p5: {
      fontSize: 14,
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'text'
    },
    link: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 28,
      textDecoration: 'underline',
      color: 'text'
    },
    button: {
      fontSize: 18,
      fontWeight: 900,
      color: 'text'
    },
    button2: {
      fontSize: 18,
      fontWeight: 600,
      color: 'text'
    },
    stats: {
      fontSize: 52,
      fontWeight: 900,
      color: 'text'
    },
    headline: {
      fontWeight: 700,
      fontSize: 4,
      color: 'white'
    },
    subHeadline: {
      fontWeight: 500,
      fontSize: 3,
      color: 'white'
    }
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

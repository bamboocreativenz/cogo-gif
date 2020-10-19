export default {
  breakpoints: ['480px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 384, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 384, 512],
  fontSizes: [10, 14, 18, 24, 28, 32, 36, 38, 52],
  maxWidth: 1400, // TODO: a conventional way to do this?
  colors: {
    text: '#333333',
    background: 'white',
    grey: '#ECECEC',
    lightGrey: '#A0A0A0',
    reportCircleBlack: '#3A3A3A',
    climate: '#6666CC',
    waste: '#FF9933',
    community: '#FF66CC',
    landAndWater: '#66CC66'
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
      lineHeight: '28px',
      color: 'text'
    },
    p3: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '22px',
      color: 'text'
    },
    p4: {
      fontSize: 18,
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: '22px',
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
      lineHeight: '28px',
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
      fontSize: 13,
      fontWeight: 900,
      color: 'text',
      bg: 'grey',
      cursor: 'pointer',
      borderRadius: 0,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'text',
      '&:hover': {
        opacity: 0.7
      }
    },
    secondary: {
      fontFamily: 'body',
      fontSize: 13,
      fontWeight: 900,
      color: 'text',
      bg: 'white',
      cursor: 'pointer',
      borderRadius: 0,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'text',
      '&:hover': {
        opacity: 0.7
      }
    },
    tertiary: {
      padding: 0,
      fontFamily: 'body',
      fontSize: 18,
      fontWeight: 600,
      color: 'text',
      bg: 'white',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7
      }
    },
    disabled: {
      fontFamily: 'body',
      bg: 'grey',
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
      color: 'white',
      '&:hover': {
        opacity: 0.7
      },
      cursor: 'pointer'
    },
    learn: {
      fontSize: 18,
      fontWeight: 900,
      color: 'text',
      cursor: 'pointer',
      borderBottom: 'solid black 2px',
      '&:hover': {
        opacity: 0.7
      }
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

import { alpha, createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#175cd3',
        },
        background: {
            default: '#f4f7fb',
            paper: '#ffffff',
        },
        text: {
            primary: '#101828',
            secondary: '#475467',
        },
        divider: alpha('#101828', 0.08),
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h5: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h6: {
            fontWeight: 700,
        },
        overline: {
            fontWeight: 700,
            letterSpacing: '0.12em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    boxShadow: '0 20px 40px rgba(16, 24, 40, 0.08)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
})

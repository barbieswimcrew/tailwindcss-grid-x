const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(
    ({ className= 'grid-x' } = {}) => {
        return function ({ addBase, addComponents, addUtilities, theme }) {

            addBase({
                ':root': {
                    '--narrow-max-w': '1200px',
                    '--narrow-px': '1rem',
                    '--narrow-size': 'calc(var(--narrow-max-w) / 2)',
                    '--content-max-w': '1500px',
                    '--content-px': '1rem',
                    '--content-size': 'calc((var(--content-max-w) - var(--narrow-max-w)) / 2)',
                    '--breakout-max-w': '1700px',
                    '--breakout-px': '0rem',
                    '--breakout-size': 'calc((var(--breakout-max-w) - var(--content-max-w)) / 2)',
                }
            });

            addComponents({
                [`.${className}`]: {
                    'display': 'grid',
                    'grid-template-columns': `[full-start] minmax(var(--breakout-px), 1fr)
                [breakout-start] minmax(var(--content-px), var(--breakout-size))
                [content-start] minmax(var(--narrow-px), var(--content-size))
                [narrow-start] min(50% - var(--narrow-px) - var(--content-px) - var(--breakout-px), var(--narrow-size))
                [content-center] min(50% - var(--narrow-px) - var(--content-px) - var(--breakout-px), var(--narrow-size))
                [narrow-end] minmax(var(--narrow-px), var(--content-size))
                [content-end] minmax(var(--content-px), var(--breakout-size))
                [breakout-end] minmax(var(--breakout-px), 1fr)
                [full-end]`,
                    '> *': {
                        'grid-column': 'content'
                    }
                }
            });

            addUtilities(
                {
                    col: (value) => ({
                        gridColumn: value
                    }),
                },
                { values: theme('gridColumn') }
            )
        }
    },
    () => {
        return {
            theme: {
                extend: {
                    gridColumn: {
                        "breakout": "breakout",
                        "breakout-left": "breakout-start / content-center",
                        "breakout-right": "content-center / breakout-end",
                        "content": "content",
                        "content-left": "content-start / content-center",
                        "content-right": "content-center / content-end",
                        "narrow": "narrow",
                        "narrow-left": "narrow-start / content-center",
                        "narrow-right": "content-center / narrow-end",
                        "full": "full",
                        "full-left": "full-start / content-center",
                        "full-right": "content-center / full-end",
                    }
                }
            }
        }
    }
);

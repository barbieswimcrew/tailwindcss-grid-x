const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(
    ({ className= 'grid-x' } = {}) => {
        return function ({ addBase, addComponents, addUtilities, theme }) {

            addBase({
                ':root': {
                    '--narrow-max-w': '1200px',
                    '--narrow-px': '1rem',
                    '--narrow-size': 'min((var(--narrow-max-w) / 2), 50% - var(--narrow-px) * 2)',
                    '--content-max-w': '1500px',
                    '--content-px': '1rem',
                    '--content-size': 'minmax(var(--content-px), calc((var(--content-max-w) - var(--narrow-max-w)) / 2))',
                    '--breakout-max-w': '1700px',
                    '--breakout-px': '1rem',
                    '--breakout-size': 'minmax(var(--breakout-px), calc((var(--breakout-max-w) - var(--content-max-w)) / 2))',
                    '--full-size': 'minmax(0, 1fr)',
                }
            });

            addComponents({
                [`.${className}`]: {
                    'display': 'grid',
                    'grid-template-columns': `[full-start] var(--full-size)
                [breakout-start] var(--breakout-size)
                [content-start] var(--content-size)
                [narrow-start] var(--narrow-size)
                [full-center breakout-center narrow-center content-center] var(--narrow-size) [narrow-end]
                var(--content-size) [content-end]
                var(--breakout-size) [breakout-end]
                var(--full-size) [full-end]`,
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

import colors from 'tailwindcss/colors'

export const spectrum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => 'violet-400')

export const rating = ['green-400', 'yellow-400', 'amber-500', 'orange-500', 'red-500']

export const theme = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  'base-100': colors.neutral['900'],
  'base-200': colors.neutral['800'],
  'base-300': colors.neutral['600'],
  'base-content': colors.neutral['300'],

  primary: colors.violet['800'],
  'primary-focus': colors.violet['700'],
  'primary-content': colors.violet['50'],

  secondary: colors.sky['700'],
  'secondary-focus': colors.sky['600'],
  'secondary-content': colors.sky['50'],

  accent: colors.fuchsia['700'],
  'accent-focus': colors.fuchsia['600'],
  'accent-content': colors.fuchsia['50'],

  neutral: '#000000', // Dark as my soul
  'neutral-focus': colors.neutral['800'],
  'neutral-content': colors.neutral['50'],

  info: colors.indigo['700'],
  success: colors.green['700'],
  warning: colors.orange['500'],
  error: colors.red['700'],

  '--btn-info-content': colors.neutral[50],
  '--btn-success-content': colors.neutral[50],
  '--btn-warning-content': colors.neutral[50],
  '--btn-error-content': colors.neutral[50],

  '--theme-gradient': `repeating-linear-gradient(
    90deg,
    ${colors.red[600]} 0,
    ${colors.orange[600]} 11%,
    ${colors.yellow[600]} 22%,
    ${colors.lime[600]} 33%,
    ${colors.green[600]} 44%,
    ${colors.cyan[600]} 55%,
    ${colors.blue[600]} 66%,
    ${colors.indigo[600]} 77%,
    ${colors.violet[600]} 88%,
    ${colors.purple[600]} 100%
  )`,

  '--code-background-color': '#111',
  '--code-background-highlight-color': '#191919',
  '--code-border-color': colors.neutral['800'],
  '--code-color': colors.neutral['300'],
  '--code-font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  '--code-border-radius': '0.5rem',
  '--code-border-style': 'solid',
  '--code-border-width': 2,
  '--code-outer-padding': '0 0.5rem',
  '--code-inner-padding': '1rem',
  '--code-color-keyword': colors.yellow['500'],
  '--code-font-weight-keyword': 'bold',
  '--code-color-entity': colors.violet['400'],
  '--code-font-weight-entity': 'bold',
  '--code-color-constant': colors.lime['300'],
  '--code-color-string': colors.sky['300'],
  '--code-font-style-string': 'italic',
  '--code-color-variable': colors.indigo['300'],
  '--code-color-comment': colors.neutral['400'],
  '--code-color-tag': colors.green['600'],
  '--code-color-property': colors.yellow['200'],
  '--code-font-weight-property': 'bold',

  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '1.9rem',
  '--animation-btn': '0.25s',
  '--animation-input': '.4s',
  '--padding-card': '2rem',
  '--btn-text-case': 'uppercase',
  '--navbar-padding': '.5rem',
  '--border-btn': '1px',
  '--focus-ring': '2px',
  '--focus-ring-offset': '2px',

  '--pattern-bg': colors.neutral['900'],
  '--pattern-fabric': colors.neutral['300'],
  '--pattern-lining': colors.emerald['700'],
  '--pattern-interfacing': colors.neutral['500'],
  '--pattern-canvas': colors.amber['700'],
  '--pattern-various': colors.red['700'],
  '--pattern-mark': colors.blue['700'],
  '--pattern-contrast': colors.pink['600'],
  '--pattern-note': colors.violet['600'],

  '--pattern-dev-0': colors.red['500'],
  '--pattern-dev-1': colors.green['500'],
  '--pattern-dev-2': colors.blue['500'],
  '--pattern-dev-3': colors.yellow['500'],
  '--pattern-dev-4': colors.pink['500'],
  '--pattern-dev-5': colors.violet['500'],
  '--pattern-dev-6': colors.teal['500'],
  '--pattern-dev-7': colors.neutral['500'],

  stripeTheme: 'night',
}

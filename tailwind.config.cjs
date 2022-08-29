/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  whitelistPatterns:[/el-.+$/],
  whitelistPatternsChildren: [/el-.+$/],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [],
  prefix: 'tw-',
  corePlugins: {
    // tailwind插件选项的启用禁用
    preflight: false,
  }
}

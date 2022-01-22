// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

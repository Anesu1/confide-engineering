/** @type {import('next').NextConfig} */
const nextConfig = {
 
    webpack: (config, { isServer }) => {
        // Add a rule to handle font files
        config.module.rules.push({
          test: /\.(woff|woff2|ttf|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '/_next/static/fonts',
            },
          },
        });
    
        return config;
      },
}

module.exports = nextConfig

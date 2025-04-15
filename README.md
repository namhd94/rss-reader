# RSS Reader

A modern web application that collects and displays news from various Vietnamese news sources via their RSS feeds. This project provides a clean, responsive interface for browsing news articles from multiple sources.

<!-- Add a screenshot here when available -->
<!-- ![RSS Reader Screenshot](src/assets/screenshot.png) -->

## Live Demo

Check out the live application: [https://namhd94.github.io/rss-reader/](https://namhd94.github.io/rss-reader/)

## Application Screenshot

To see the application in action, visit the [live demo](https://namhd94.github.io/rss-reader/) or clone and run the project locally.

### Adding a Screenshot to this README

If you'd like to add a screenshot to this README:

1. Take a screenshot of the application
2. Save it as `screenshot.png` in the `src/assets/` directory
3. Uncomment the image markdown in this README
4. When pushing to GitHub, the image will be displayed

## Features

- **Multiple News Sources**: Read news from top Vietnamese publishers like VnExpress, Tuoitre, Thanhnien, and more
- **Modern UI**: Clean, responsive interface that works on desktop and mobile devices
- **Article Preview**: View article descriptions and thumbnails before clicking through to the full content
- **Mobile Friendly**: Optimized for all screen sizes with a collapsible sidebar
- **Error Handling**: Graceful handling of network issues and invalid feeds

## Technologies

- **Framework**: Angular 9
- **UI Components**: Bootstrap 4
- **Icons**: Font Awesome 5
- **Typography**: Google Fonts (Roboto)
- **RSS Service**: RSS2JSON API for converting RSS feeds to JSON format
- **Hosting**: GitHub Pages

## Setup and Development

### Prerequisites

- Node.js (Recommend v14.x for best compatibility)
- npm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/namhd94/rss-reader.git
cd rss-reader
```

2. Install dependencies
```bash
npm install --legacy-peer-deps
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Compatible Node.js Versions

This project works best with Node.js v14.x. If you're using a newer version (v17+), the `NODE_OPTIONS=--openssl-legacy-provider` flag is included in the npm scripts to handle OpenSSL compatibility issues.

## Build and Deployment

### Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/rss-reader/` directory.

### Deploying to GitHub Pages

To deploy the application to GitHub Pages:

```bash
npm run deploy
```

This will build the application with the correct base href and publish it to the gh-pages branch.

## Project Structure

```
src/
├── app/
│   ├── content/            # Content component for displaying articles
│   ├── nav/                # Navigation component with news sources
│   ├── model/              # Data models and interfaces
│   ├── feed.service.ts     # Service for fetching RSS feeds
│   ├── event-bus.service.ts # Service for handling events between components
│   └── app.component.*     # Main application component
├── assets/                 # Static assets
├── environments/           # Environment configuration
└── index.html              # Main HTML file
```

## RSS Sources

The application fetches news from the following RSS sources:

1. VnExpress: https://vnexpress.net/rss/tin-moi-nhat.rss
2. Tuoitre: https://tuoitre.vn/rss/tin-moi-nhat.rss
3. Laodong: https://laodong.vn/rss/thoi-su.rss
4. Vietnamnet: https://vietnamnet.vn/rss/thoi-su.rss
5. DoisongPhapluat: https://doisongphapluat.nguoiduatin.vn/rss/home.rss
6. Thanhnien: https://thanhnien.vn/rss/home.rss

## Troubleshooting

### Common Issues

1. **Node.js Compatibility**: If you see `ERR_OSSL_EVP_UNSUPPORTED` errors, use Node.js v14 or add the `--openssl-legacy-provider` flag.
2. **Blank Page on GitHub Pages**: Clear your browser cache or check the console for 404 errors related to script paths.
3. **RSS Feed Errors**: Some RSS feeds may change their URL structure. Check the console for API errors.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

* **[Nam Hoang](https://github.com/namhd94)**

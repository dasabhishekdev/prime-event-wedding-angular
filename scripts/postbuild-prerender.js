const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'prime-event-app');
const routesFile = path.join(__dirname, '..', 'routes.txt');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Missing build output:', indexPath);
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');
const routes = fs
  .readFileSync(routesFile, 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);

routes.forEach((route) => {
  const relative = route.replace(/^\//, '');
  const targetDir = path.join(distDir, relative);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml);
});

console.log(`Prerender shell: wrote index.html for ${routes.length} routes.`);

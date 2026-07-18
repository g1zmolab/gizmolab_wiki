docker run --rm -it \
  -v "$PWD":/app \
  -w /app \
  node:22 \
  sh -c 'npm install && npm run build'

mv /var/www/wiki.gizmolab.net /var/www/wiki.gizmolab.net.old
cp -r dist /var/www/wiki.gizmolab.net

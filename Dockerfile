# Image officielle Node.js
FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Port exposé par l'app
EXPOSE 8888

# Commande de démarrage
CMD ["node", "app.js"]

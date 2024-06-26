# Utiliser l'image node officielle en tant que base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY index.js ./
COPY app ./app
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["node", "index.js"]

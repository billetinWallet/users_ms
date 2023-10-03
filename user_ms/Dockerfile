# Usa la imagen oficial de Node.js versión 14 como base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de el proyecto al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que escucha la  aplicación 
EXPOSE 3002

# Comando para iniciar tu aplicación (reemplaza 'app.js' con el archivo de entrada)
CMD ["npm", "start"]

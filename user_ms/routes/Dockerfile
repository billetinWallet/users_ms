# Usar una imagen base adecuada para tu lenguaje (por ejemplo, node:14 para Node.js)
FROM node:14

# Establecer el directorio de trabajo en la imagen
WORKDIR /app

# Copiar los archivos necesarios al contenedor
COPY package*.json ./
COPY ./routes ./routes
COPY app.js .

# Instalar las dependencias
RUN npm install
RUN npm install mongoose
RUN npm install express
RUN npm install body-parser
 

# Exponer el puerto en el que el microservicio escucha
EXPOSE 3002

# Comando para iniciar el microservicio
CMD ["npm", "start"]
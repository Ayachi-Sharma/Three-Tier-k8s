FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# npm ci intead of install cause it installs exactly same from package-lock.json
RUN npm ci                  
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
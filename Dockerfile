FROM node:20-alpine

WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./
RUN npm ci

# Copia o código e faz o build
COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

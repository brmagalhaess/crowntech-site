# ─── Imagem base: Nginx leve (Alpine Linux) ─────────────────────────────────
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos do site para dentro do container
COPY . /usr/share/nginx/html

# Copia a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx em foreground (necessário para Docker)
CMD ["nginx", "-g", "daemon off;"]

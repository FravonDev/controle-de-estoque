FROM node:18.12.1

# Intall missing dependencies

# Create App dir
RUN mkdir -p /app

# Set working directory to App dir
WORKDIR /app

COPY package.json .

# Copy project files
COPY . .
RUN npm install

RUN npm run migration:generate
RUN npm run migration:run

EXPOSE 3000

CMD [ "npm","run","dev" ]


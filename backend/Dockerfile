FROM node:14
WORKDIR /home/node/app
COPY package*.json ./
RUN npm set strict-ssl false; npm install
# COPY ./prisma ./prisma
# RUN npx prisma generate
# COPY . .

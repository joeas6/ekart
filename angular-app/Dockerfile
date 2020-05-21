FROM node

# Create app directory
WORKDIR /usr/src/angular-app

RUN apt-get update

RUN apt-get -y install gettext-base

RUN npm install -g @angular/cli

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
#RUN npm ci --only=production

#RUN chown -R root:root /usr/local/lib/node_modules/
#RUN chmod -R 777 /usr/local/lib/node_modules/

#RUN npm install --save-dev @angular-devkit/build-angular
#RUN npm install --save-dev @angular/cli@latest

#RUN npm install -g @angular-devkit/build-angular
#RUN npm install -g @angular/cli
#RUN npm install -g @angular/cli@latest

#RUN npm install --save-dev -g @angular-devkit/build-angular
#RUN npm install -g @angular/cli
#RUN npm install --save-dev -g @angular/cli@latest


# Bundle app source
COPY . .

#RUN ng build --prod
RUN ng build --prod

EXPOSE 80

#CMD ["/bin/sh",  "-c",  "envsubst < /usr/src/angular-app/dist/angular-app/assets/env/env.template.js > /usr/src/angular-app/dist/angular-app/assets/env/env.js && exec node /usr/src/angular-app/dist/angular-app/server.js"]

CMD ["/bin/sh",  "-c",  "envsubst < /usr/src/angular-app/dist/angular-app/assets/env/env.template.js > /usr/src/angular-app/dist/angular-app/assets/env/env.js && node /usr/src/angular-app/dist/angular-app/server.js"]

#CMD ["/bin/sh",  "-c",  "envsubst < /usr/src/angular-app/dist/angular-app/assets/env/env.template.js > /usr/src/angular-app/dist/angular-app/assets/env/env.js"]

#RUN /bin/sh -c "envsubst < /usr/src/angular-app/dist/angular-app/assets/env/env.template.js > /usr/src/angular-app/dist/angular-app/assets/env/env.js"

#CMD [ "node", "/usr/src/angular-app/dist/angular-app/server.js" ]

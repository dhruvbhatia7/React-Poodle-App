FROM node

RUN mkdir /usr/src/app

COPY . /usr/src/app

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
#RUN npm install
#RUN npm install react-scripts@3.0.1 -g
RUN yarn

# start app
CMD ["npm", "test"]
# base image: node version
FROM cypress/base:12.1.0
# create new folder
RUN mkdir /app
# set that folder as working directory
WORKDIR /app
# copy everything from here to /app
COPY . /app
# install all dependencies from package.json
RUN npm install
# verify successful installation
RUN $(npm bin)/cypress verify
# run all tests in new container
RUN ("npm", "run", "cy:run")

FROM node

ENV PROJECT_DIR=/opt/project \
    PORT=8080

WORKDIR ${PROJECT_DIR}
COPY . ${PROJECT_DIR}

CMD npm i && npm start
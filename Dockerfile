FROM node

ENV PORT=8080 \
    PROJECT_DIR=/opt/project

WORKDIR ${PROJECT_DIR}
COPY . .

RUN npm i && \
    npx tsc && \
    npx sass src/scss/:build/css/ --style compressed

CMD npm start
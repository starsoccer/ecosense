FROM node:16-bullseye

ADD package.json ./
ADD yarn.lock ./

RUN yarn

# Copy data for add-on
COPY . .
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
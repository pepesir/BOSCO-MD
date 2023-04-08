FROM quay.io/pepesir/bosco-md:beta
RUN git clone https://github.com/pepesir/BOSCO-MD /BOSCO-MD
WORKDIR /BOSCO-MD
RUN npm install
CMD ["node", "bot.js"]

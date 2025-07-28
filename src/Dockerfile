FROM quay.io/almalinuxorg/almalinux:latest

LABEL name="am-d-model-site"

ENV NODE_ENV="production"

RUN dnf upgrade --assumeyes
RUN dnf install --assumeyes unzip git

RUN curl -fsSL https://bun.com/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

RUN mkdir /src
WORKDIR /src

RUN git clone --branch prod https://github.com/Cian-H/am-d-model.eu.git
WORKDIR /src/am-d-model.eu
RUN bun install
RUN bun pm trust --all
RUN ls
RUN bunx vite build
RUN mkdir -p /var/www/site/
RUN mv ./build/* /var/www/site/

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

ENTRYPOINT ["bun", "/var/www/site/index.js"]

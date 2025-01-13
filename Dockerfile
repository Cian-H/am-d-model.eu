FROM almalinux:latest

ENV SOCKET_PATH=false
ENV HOST="0.0.0.0"
ENV PORT=3000

RUN dnf upgrade --assumeyes
RUN dnf install --assumeyes unzip git

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

RUN mkdir /src
WORKDIR /src

RUN git clone https://github.com/Cian-H/am-d-model.eu.git
WORKDIR /src/am-d-model.eu
RUN bun install
RUN mkdir -p /var/www/site/
RUN bunx vite build --outDir /var/www/site/

ENTRYPOINT ["bun", "/var/www/site/index.js"]

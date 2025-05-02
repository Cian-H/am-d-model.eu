FROM ghcr.io/front-matter/invenio-rdm-starter:v12.0.13.4

RUN /opt/invenio/.venv/bin/python -m ensurepip
RUN /opt/invenio/.venv/bin/python -m pip install -e /opt/invenio/var/instance/static/plugin
RUN /opt/invenio/.venv/bin/python -m pip uninstall -e pip

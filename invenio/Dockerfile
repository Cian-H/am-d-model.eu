FROM ghcr.io/front-matter/invenio-rdm-starter:v12.0.13.4

# Copy config and assets
COPY invenio.cfg /opt/invenio/var/instance/invenio.cfg
COPY assets /opt/invenio/var/instance/static/custom_assets

# Add the customisation plugin
RUN /opt/invenio/.venv/bin/python -m ensurepip
COPY plugin /opt/invenio/var/instance/static/plugin
RUN /opt/invenio/.venv/bin/python -m pip install /opt/invenio/var/instance/static/plugin
RUN /opt/invenio/.venv/bin/python -m pip uninstall -y pip

from setuptools import setup

setup(
    name="custom_invenio_plugin",
    version="0.1.0",
    packages=["custom_invenio_plugin"],
    entry_points={
        "invenio_base.apps": [
            "custom_invenio_plugin = custom_invenio_plugin:init_app",
        ],
    },
)

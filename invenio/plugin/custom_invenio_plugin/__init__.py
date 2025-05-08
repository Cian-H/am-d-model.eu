from flask import redirect
from flask_menu import register_menu


def init_app(app):
    """Initialize application."""

    @register_menu(app, ".main.amdmodel", "About AM-D-Model")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    return app

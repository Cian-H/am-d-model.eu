from flask import redirect
from flask_menu import current_menu


def init_app(app):
    """Initialize the application and register the menu item."""

    @app.route("/amdmodel", endpoint="main.amdmodel")
    @current_menu.route("About AM-D-Model")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    return app


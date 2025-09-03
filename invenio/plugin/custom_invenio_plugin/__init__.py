from flask import redirect
from flask_menu import current_menu


def init_app(app):
    """Initialize application."""

    @app.route("/amdmodel")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        rd = redirect("https://am-d-model.eu")
        with app.app_context():
            rd = current_menu.register(".main.amdmodel", "About AM-D-Model")(rd)
        return rd

    return app

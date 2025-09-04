from flask import redirect
from flask_menu import current_menu


def init_app(app):
    """Initialize application."""

    @app.route("/amdmodel")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    def register_menu_items():
        with app.app_context():
            menu_item = current_menu.submenu(".main.amdmodel")
            menu_item.register(
                endpoint='redirect_to_amdmodel',
                text='About AM-D-Model'
            )

    with app.app_context():
        register_menu_items()

    return app

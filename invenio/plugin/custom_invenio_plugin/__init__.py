from flask import redirect


def init_app(app):
    """Initialize application."""
    from . import views

    @app.route("/redirect-to-amdmodel")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    @app.before_first_request
    def init_main_menu():
        from flask_menu import current_menu

        current_menu.submenu("main").register(
            "custom_invenio_plugin.redirect_to_amdmodel",
            text="About AM-D-Model",
            order=0,
        )

    return app

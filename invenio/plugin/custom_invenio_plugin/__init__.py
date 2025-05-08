from flask import redirect


def init_app(app):
    """Initialize application."""

    @app.route("/amdmodel_landing")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    @app.before_first_request
    def init_main_menu():
        from flask_menu import current_menu

        current_menu.submenu("main").register(
            "amdmodel_landing",
            text="About AM-D-Model",
            order=0,
        )

    return app

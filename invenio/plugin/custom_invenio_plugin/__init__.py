from flask import redirect


def init_app(app):
    """Initialize application."""

    @app.route("/amdmodel")
    @app.extensions["menu"].root().register(".main.amdmodel", "About AM-D-Model")
    def redirect_to_amdmodel():
        """Redirect to the AM-D-Model website."""
        return redirect("https://am-d-model.eu")

    return app

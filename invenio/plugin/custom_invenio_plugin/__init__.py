from flask import Blueprint

blueprint = Blueprint(
    "custom_menu",
    __name__,
)


def init_app(app):
    """Initialize application."""
    app.register_blueprint(blueprint)

    from . import views

    return app

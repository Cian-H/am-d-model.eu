from flask import Blueprint


def init_app(app):
    """Initialize application."""
    app.register_blueprint(views.blueprint)
    return app


from . import views

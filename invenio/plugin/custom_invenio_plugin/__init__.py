from flask import Blueprint


def init_app(app):
    """Initialize application."""
    from . import views

    app.register_blueprint(views.blueprint)

    @app.before_first_request
    def init_menus():
        views.init_menu()

    return app

from flask import Blueprint
from flask_menu import current_menu

blueprint = Blueprint(
    "custom_menu",
    __name__,
)


@blueprint.before_app_first_request
def init_menu():
    """Add custom items to main menu."""
    current_menu.submenu("main").register(
        "About AM-D-Model",
        "https://am-d-model.eu",
        order=0,
    )

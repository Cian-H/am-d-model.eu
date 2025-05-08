def init_main_menu():
    """Add custom items to main menu."""
    from flask_menu import current_menu

    current_menu.submenu("main").register(
        id="amdmodel",
        text="About AM-D-Model",
        external_url="https://am-d-model.eu",
        order=0,
    )

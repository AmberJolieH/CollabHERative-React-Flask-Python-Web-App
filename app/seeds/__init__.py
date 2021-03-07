from flask.cli import AppGroup
from .users import seed_users, undo_users
from .showcase import seed_showcases, undo_showcases
from .techcategories import seed_techcategories, undo_techcategories
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_techcategories()
    seed_showcases()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_showcases()
    undo_techcategories()
    undo_users()
    # Add other undo functions here

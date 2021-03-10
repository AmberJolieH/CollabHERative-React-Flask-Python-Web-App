from werkzeug.security import generate_password_hash
from app.models import db, TechCategory

# Adds a demo user, you can add other users here if you want


def seed_techcategories():

    demo = TechCategory(name='Software (Full Stack/Front End/Back End)')

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_techcategories():
    db.session.execute('TRUNCATE techcategories RESTART IDENTITY CASCADE;')
    db.session.commit()

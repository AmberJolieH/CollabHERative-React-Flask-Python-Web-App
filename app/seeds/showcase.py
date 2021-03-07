from werkzeug.security import generate_password_hash
from app.models import db, Showcase

# Adds a demo user, you can add other users here if you want


def seed_showcases():

    demo = Showcase(techCategoryId=1, userId=1,
                    description="CollabHERative Capstone",
                    title='''a social web app that builds community
                for women in tech and their allies.''',
                    skill="Python, Flask, React, Redux, Emotion CSS Library")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_showcases():
    db.session.execute('TRUNCATE showcases CASCADE;')
    db.session.commit()

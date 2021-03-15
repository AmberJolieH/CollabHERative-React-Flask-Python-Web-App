from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', firstname="Zesty", lastname="tester",
                techcategoryid=1)
    Amber = User(username='Amberjolie', email='amberjolieh@gmail.com',
                 password='password', firstname='Amber', lastname='Horn'
                 techcategoryid=3, imgurl="https://collabherative.s3.us-east-2.amazonaws.com/profile-Amber+.svg")
    Courtney = User(username=CJNewcomer,
                    email='courtney@test.com', password='password',
                    firstname='Courtney', lastname='Newcomer',
                    techcategoryid=3, imgurl="https://collabherative.s3.us-east-2.amazonaws.com/Courtney_Profile.png")
    Arianna = User(username='AriannaJ', email='arianna@test.com',
                   password='password',
                   firstname='Arianna', lastname='Johnson', techcategoryid=3,
                   imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Arianna_Profile-3.png')
    Nicole = User(username='NicoleL', email='Nicole@test.com',
                  password='password', firstname='Nicole', lastname='Loescher',
                  techcategoryid=3, imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Nicole_Profile.png')

    Kristen = User(username='KristenF', email='kristen@test.com',
                   password='password', firstname='Kristen',
                   lastname='Florey', techcategoryid=1, imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Kristen_Profile-2.png'
                   )
    Zoe = User(username='ZoeD', email='Zoe@test.com',
               password='password', firstname='Zoe', lastname='D'
               techcategoryid=4, imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Zoe_Profile.png')

    Valarie = User(username='ValarieB', email='valarie@test.com',
                   password='password', firstname='Valarie', lastname='B',
                   techcategoryid=5, imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Valarie_Profile.png')
    Tara = User(username='TaraK', email='tara@test.com', password='password',
                firstname='Tara', lastname='K',
                techcategoryid=6, imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Tara_Profile.png')
    Sarah = User(username='SarahT', email='sarah@test.com', password='password',
                 firstname='Sarah', lastname='T', techcategoryid='7', imgurl='https://collabherative.s3.us-east-2.amazonaws.com/Sarah_Profile.png')
    
    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

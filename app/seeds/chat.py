from app.models import db, DirectMessage, User

# Adds a demo user


def seed_chat():

    user1 = User.query.filter_by(firstname="Demo").first()
    user2 = User.query.filter_by(firstname="Amber").first()
    user3 = User.query.filter_by(firstname="Courtney").first()
    user4 = User.query.filter_by(firstname="Arianna").first()
    user5 = User.query.filter_by(firstname="Nicole").first()
    user6 = User.query.filter_by(firstname="Kristen").first()
    user7 = User.query.filter_by(firstname="Zoe").first()
    user8 = User.query.filter_by(firstname="Valarie").first()
    user9 = User.query.filter_by(firstname="Tara").first()
    user10 = User.query.filter_by(firstname="Sarah").first()

    messages = [
        DirectMessage(
            senderid=user1.id,
            receiverid=user2.id,
            message="Your new project is so awesome",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user3.id,
            message="Did you hear about the new job post?!",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user4.id,
            message="what is your linkedin link?",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user5.id,
            message="what is your github link?",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user6.id,
            message="want to pair code this week?",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user7.id,
            message="How have you been!?",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user8.id,
            message="how was your interview?!",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user9.id,
            message="Hey how are you!?",
        ),
        DirectMessage(
            senderid=user1.id,
            receiverid=user10.id,
            message="I have an interview Tuesday with my dream company!",
        ),
        DirectMessage(
            senderid=user2.id,
            receiverid=user1.id,
            message="thank you so much!!",
        ),
        DirectMessage(
            senderid=user3.id,
            receiverid=user1.id,
            message="yeah! they want to hire a ux/ui designer",
        ),
        DirectMessage(
            senderid=user4.id,
            receiverid=user1.id,
            message="https://www.linkedin.com/in/arianna-johnson-92773859/",
        ),
        DirectMessage(
            senderid=user5.id,
            receiverid=user1.id,
            message="https://www.linkedin.com/in/nicole-marie-loescher/",
        ),
        DirectMessage(
            senderid=user6.id,
            receiverid=user1.id,
            message="yeah Tuesday works great, I am free after noon",
        ),
        DirectMessage(
            senderid=user7.id,
            receiverid=user1.id,
            message="been great just started a new project!",
        ),
        DirectMessage(
            senderid=user8.id,
            receiverid=user1.id,
            message="I think it went great, left with a really positive feeling",
        ),
        DirectMessage(
            senderid=user9.id,
            receiverid=user1.id,
            message="I am great! how have you been!?",
        ),
        DirectMessage(
            senderid=user9.id,
            receiverid=user1.id,
            message="killin it!",
        ),
    ]

    db.session.bulk_save_objects(messages)
    db.session.commit()


def undo_chat():
    db.session.execute("TRUNCATE directmessages;")
    db.session.commit()

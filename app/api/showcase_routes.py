from app.models import db, Showcase
from app.forms.showcase_form import ShowcaseForm
from flask import Blueprint, jsonify, redirect, request

showcase_routes = Blueprint('showcases', __name__)

# create a showcase


@showcase_routes.route('/create_showcase', methods=['POST'])
def create_showcase():
    form = ShowcaseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        showcase = Showcase(
            userId=form.data['userId'],
            techCategoryId=form.data['techCategoryId'],
            description=form.data['description'],
            skill=form.data['skill'],
            title=form.data['title'],
        )
        db.session.add(showcase)
        db.session.commit()
        return showcase.to_dict()
    print(form.errors)
    return {'errors': form.errors}


# get all showcases

@showcase_routes.route('/')
def showcase():
    showcases = Showcase.query.all()
    return {"showcases": [showcase.to_dict() for showcase in showcases]}


# get showcases by category type

@showcase_routes.route('/techCategories/<int:id>')
def techCategories(id):
    cats = [
        'UX/UI Design',
        'Product Marketing/Product Management',
        'Software (Full Stack/Front End/Back End)',
        'Cloud Computing',
        'Cybersecurity',
        'Data Analytics/Data Science',
        'Tech Sales/Tech Procurement',
        'AI/Machine Learning/Automation',
    ]
    techcategory = cats[id - 1]
    showcase = showcase.query.filter(showcase.catName == techcategory)
    print('=====================', [showcase.to_dict()
                                    for showcase in showcase])
    return {"showcase": [showcase.to_dict() for showcase in showcase]}


# delete a showcase

@showcase_routes.route('/showcase/<int:id>', methods=['DELETE'])
def delete_showcase(id):
    showcase = Showcase.query.get(id)
    db.session.delete(showcase)
    db.session.commit()
    showcases = Showcase.query.all()
    return {"showcases": [showcase.to_dict() for showcase in showcases]}

# update a showcase 
# form w/ same values 
# route -> put method -> query -> db session commit ** 


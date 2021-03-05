"""try again Again

Revision ID: 69b76f244140
Revises: 
Create Date: 2021-03-05 13:13:09.843642

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '69b76f244140'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('skills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('firstname', sa.String(length=40), nullable=False),
    sa.Column('lastname', sa.String(length=40), nullable=False),
    sa.Column('middleinitial', sa.String(length=40), nullable=False),
    sa.Column('driverslicense', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('githuburl', sa.String(length=2000), nullable=True),
    sa.Column('isallies', sa.Boolean(), nullable=True),
    sa.Column('isrecruiter', sa.Boolean(), nullable=True),
    sa.Column('techcategoryid', sa.Integer(), nullable=True),
    sa.Column('imgurl', sa.String(length=2000), nullable=True),
    sa.Column('resumeUrl', sa.String(length=2000), nullable=True),
    sa.Column('userskill', sa.String(length=2000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('userskills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('skillsid', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['skillsid'], ['skills.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('userskills')
    op.drop_table('users')
    op.drop_table('skills')
    # ### end Alembic commands ###

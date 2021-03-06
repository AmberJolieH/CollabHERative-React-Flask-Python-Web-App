"""empty message

Revision ID: b4317caf36f7
Revises: cd89d6fbebbf
Create Date: 2021-03-23 16:27:52.591541

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4317caf36f7'
down_revision = 'cd89d6fbebbf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('directmessages', sa.Column('timestamp', sa.DateTime(), nullable=True))
    op.create_index(op.f('ix_directmessages_timestamp'), 'directmessages', ['timestamp'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_directmessages_timestamp'), table_name='directmessages')
    op.drop_column('directmessages', 'timestamp')
    # ### end Alembic commands ###

import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE','Project2.settings')


import django
django.setup()

# Import Packages
from faker import Faker
from App2.models import Users

fake_gen=Faker()

def load_user():

    first_name=fake_gen.first_name()

    last_name=fake_gen.last_name()

    email_address=fake_gen.email()

    Users.objects.get_or_create(first_name=first_name,
                                last_name=last_name,
                                email_address=email_address)


def populate_data(N=10):

    for i in range(N):

        load_user()




if __name__=='__main__':

    print('data getting populated')

    populate_data(20)

    print('loading data successful')
# Configurations
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','MyProject.settings')

import django
django.setup()


from HelloWorldApp.models import WebPage,Topics,AccessRecord
import random
from faker import Faker

fakegen=Faker()

topics=['OTT',"Games",'E-Learning','News','Business']

def add_topic():

    return Topics.objects.get_or_create(topic=random.choice(topics))


def PopulateTables(N=8):

    for num in range(N):

        topic=add_topic()[0]

        fakename=fakegen.name()

        fake_url=fakegen.url()

        fake_date=fakegen.date()


        # populate webpage

        webPg=WebPage.objects.get_or_create(topic=topic,name=fakename,url=fake_url)[0]


        # populate access record

        accRec=AccessRecord.objects.get_or_create(name=webPg,date=fake_date)



if __name__=='__main__':

    print("fake data getting populated")

    PopulateTables(25)

    print('populating tables complete')
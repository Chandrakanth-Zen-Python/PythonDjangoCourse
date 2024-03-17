from django.urls import path
from HelloWorldApp.views import *


urlpatterns=[
    path('Freedom',main,name='hwindex')
]
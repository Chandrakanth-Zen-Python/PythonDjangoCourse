from django.urls import path
from App2.views import *


urlpatterns=[
    path('',ListUsers,name='list_users'),
    path('signup/',signup,name='signup')
]


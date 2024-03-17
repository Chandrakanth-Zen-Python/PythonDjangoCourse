from django.urls import path,include
from BasicApp import views

app_name='BasicApp'


urlpatterns=[
    path('registration/',views.registration,name='registration'),
    path('login/',views.user_login ,name='user_login'),
    path('special/',views.special ,name='special'),
]
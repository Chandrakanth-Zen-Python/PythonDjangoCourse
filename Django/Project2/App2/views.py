from django.shortcuts import render
from django.http import HttpResponse
from App2.models import Users
from App2.forms import UserSignUp

# Create your views here.


def index(request):

    return HttpResponse('<em>Hello World</em>')


def ListUsers(request):

    users=Users.objects.all()

    user_list={'users':users}

    return render(request,'App2/users.html',user_list)

def signup(request):

    form=UserSignUp()

    if request.method=="POST":

        form=UserSignUp(request.POST)

        if form.is_valid():

            form.save()

            return index(request)

    
    formObj={'form':form}
        
    return render(request,'App2/signup.html',context=formObj)
        






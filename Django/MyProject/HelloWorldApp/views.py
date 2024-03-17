from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def main(request):

    insertObj={'insert_me':"Hello This is your CK"}

    return render(request,'HelloWorldApp/index.html',insertObj)

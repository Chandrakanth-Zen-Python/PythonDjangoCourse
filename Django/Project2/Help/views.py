from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):

    'render help html'

    context={'message':"Call 108 for help!!!"}

    return render(request,'Help/index.html',context)

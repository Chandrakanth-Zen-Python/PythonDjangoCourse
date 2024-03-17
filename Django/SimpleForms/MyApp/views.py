from django.shortcuts import render
from MyApp.forms import MyForm

# Create your views here.

def index(request):

    return render(request,'MyApp/index.html')


def form_view(request):

    form=MyForm()

    if request.method=='POST':

        form=MyForm(request.POST)

        if form.is_valid():

            print(form.cleaned_data['name'])
            print(form.cleaned_data['email'])
            print(form.cleaned_data['text'])

    context={"form":form}

    return render(request,'MyApp/forms.html',context)

from django.shortcuts import render
from BasicApp.forms import UserForm,UserProfileInfoForm
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login,logout,authenticate




# Create your views here.

def index(request):

    return render(request,'BasicApp/index.html')


@login_required
def special(request):

    return HttpResponse('Welcome Puppyma Welcome')



def registration(request):

    formUser=UserForm()
    formUserProfile=UserProfileInfoForm()

    if request.method=='POST':

        formUser=UserForm(request.POST)

        formUserProfile=UserProfileInfoForm(request.POST)

        if formUser.is_valid() and formUserProfile.is_valid():

            print('registration complete')

            user=formUser.save()

            user.set_password(user.password)

            user.save()

            profile= formUserProfile.save(commit=False)

            profile.user=user

            print(request.FILES)

            if 'profile_pic' in request.FILES:

                print('profile_pic found')

                profile.profile_pic=request.FILES["profile_pic"]
            
            profile.save()


            return index(request)
    

    context_data={'userform':formUser,'userprofileform':formUserProfile}

    return render(request,'BasicApp/registration.html',context_data)



def user_login(request):

    if request.method=='POST':

        username=request.POST.get('username')

        password=request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user:
            
            if user.is_active:

                login(request,user)

                return HttpResponseRedirect(reverse('index'))
            
            else:

                return HttpResponse('USER NOT ACTIVE')
        
        else:

            print('Something went wrong while user trying to login')

            print('username:',username)

            print('password:',password)

            return HttpResponse('UNABLE TO LOGIN YOU!')
    

    return render(request,'BasicApp/login.html',{})

@login_required
def user_logout(request):

    logout(request)

    return HttpResponseRedirect(reverse('index'))
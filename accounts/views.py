from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from .forms import UserForm

# Create your views here.
def signup(request) :
    if request.method == "POST" :
        form = UserForm(request.POST)
        if form.is_valid() :
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)
            login(request,user)
            return redirect('main:index2')

    else :
        form = UserForm()
    return render(request, 'accounts/signup.html', {'form':form})
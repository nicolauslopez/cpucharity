from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from core.forms import LoginForm, RegisterForm
from django.contrib.auth.models import User
from core.models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import time

## USER AUTHENTICATION
@login_required
def dashboard(request):
    if user_stat.objects.filter(user=request.user).count() < 1:
        user_stat.objects.create(user=request.user, seconds_mined=0)

    return render(request, 'core/dashboard.html', context={})

def login_user(request):
    next = None
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=request.POST['username'],
                    password = request.POST['password'])
            if user is not None:
                login(request, user)
                try:
                    next = request.POST['next']
                    return redirect(next)
                except:
                    next = 'dashboard'
                    return redirect(next)

            else:
                messages.add_message(request, messages.ERROR, 'Failed to authenticate.')
                return redirect('login')
        else:
            messages.add_message(request, messages.ERROR, 'Failed to authenticate.')
            return redirect('login')
    else:
        form = LoginForm()
        try:
            next = request.GET['next']
        except:
            next = None
        return render(
                request,
                'core/login.html',
                context={
                    'form': form,
                    'next': next
                    }
                )

def register_user(request):
    if request.method =='POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                    request.POST['username'],
                    request.POST['password'],
                    )
            user.set_password(request.POST['password'])
            user.save()
            user_stat.objects.create(user=user, seconds_mined=0)
            print("Saved notification for user: " + user.username)
            return redirect('login')
    else:
        form = RegisterForm()
    return render(
            request,
            'core/register.html',
            context={
                'form': form
                }
            )

def addsecond(request, username):
    usr_name = username
    try:
        stat = user_stat.objects.get(user=User.objects.get(username=username))
        stat.seconds_mined += 10
        stat.save()
        return render(request, 'core/addsecond.html', context={'username':username, 'seconds_mined': stat.seconds_mined})
    except Exception as e:
        print(e)
        return redirect('register')


def logout_user(request):
    logout(request)
    return redirect('login')

def stats(request, username):
    pass

def leaderboard(request):
    context = {}
    context['user_stats'] = user_stat.objects.all().order_by('-seconds_mined')
    return render(request, 'core/leaderboard.html', context=context)

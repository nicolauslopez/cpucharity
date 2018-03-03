from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='core/index.html')),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('addsecond/<str:username>/', views.addsecond, name='addsecond'),
    path('stats/<str:username>/', views.stats, name='stats'),
    path('leaderboard', views.leaderboard, name='leaderboard')
]

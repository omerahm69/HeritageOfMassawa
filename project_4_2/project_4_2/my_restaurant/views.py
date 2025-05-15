from django.shortcuts import render, redirect
from . models import MenuItem, Order
from django.contrib.auth.models import User
from django.contrib.auth import  authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from .forms import RegisterForm
from django.db import models
from .models import MenuItem 
from .models import Special

from django.contrib.auth import views as auth_views

# Create your views here.

def home(request):
        specials = MenuItem.objects.all()[:3]
        return render(request, 'my_restaurant/home.html', {'specials': specials})

def about_us(request):
        
        return render(request, 'my_restaurant/about_us.html')

def menu(request):
        menu_items = MenuItem.objects.all()
        cloudinary_image={'menu_items':menu_items}
        return render(request, 'my_restaurant/menu.html', {'cloudinary_image': cloudinary_image})

def booking(request):
        return render(request, 'my_restaurant/booking.html')

def contact_us(request):
        if request.method =='POST':
                name=request.POST.get('name')
                email=request.POST.get ('email')
                message=request.POST.get('message')
                messages.success(request,'Your message has been submitted!')
                return redirect('contact_us')
        return render(request, 'my_restaurant/contact_us.html')

def login_register_view(request):
        if request.method == "POST":
                username = request.POST.get("username")
                password = request.POST.get("password")
                user = authenticate(request, username=username, password=password)
                if user is not None:
                        login(request, user)
                        return redirect("home")
                else:
                        return render(request, "user_login.html", {"error": "Invalid credentials"})
        return render(request, "my_restaurant/login.html")

def register_user(request):
        if request.method == 'POST':
                form=RegisterForm(request.POST)
                if form.is_valid():
                        user=form.save()
                        login(request,user)
                        messages.success(request, 'Registration successful!' )
                        return redirect('home')
        else:
                form=RegisterForm()
        
        return render (request,'my_restaurant/register.html', {'register_form': form} )


@login_required
def manage_bookings(request):
        return render(request, 'admin_portal/bookings.html')

@login_required
def manage_menu(request):
        return render(request, 'admin_portal/menu_management.html')

@login_required
def manage_users(request):
        return render(request, 'admin_portal/user_management.html')

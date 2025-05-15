from django.db import models
from django.db import models
from cloudinary.models import CloudinaryField


# Create your models here.
class Restaurant(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField(default='3')
    price= models.FloatField()
    quantity=models.IntegerField()
    image=models.CharField(max_length=2083, default='default.jpg')
    #banner = models.ImageField(upload_to='banners/', blank=True, null=True)
    image=CloudinaryField('image', default='default.jpg')


class Customer(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    phone=models.CharField(max_length=15)
    
    def __str__(self):
        return self.name
    
class MenuItem(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    quantity=models.IntegerField(default=0)
    image = models.ImageField(upload_to='menu_images/', default='menu_images/default.jpg', null=True, blank=True)
    banner=models.ImageField(default=(''), blank=True)
    price=models.DecimalField(max_digits=6, decimal_places=2)
    available=models.BooleanField(default=True)
    image=CloudinaryField('image')

    def __str__(self):
        return self.name
    
class Order(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE)
    items=models.ManyToManyField(MenuItem)
    status=models.CharField(max_length=50, choices=[('pending','Pending'), ('completed','Completed'), ('cancelled','Cancelled')],default='pending')
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order#{self.id} for{self.customer.name})"
    
class Reservation(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    date=models.DateTimeField()
    number_of_people=models.IntegerField()

    def __str__(self):
        return f"Reservation for {self.customer.name} on {self.date}"
    
class Table(models.Model):
    table_number = models.IntegerField(unique=True)
    seats = models.IntegerField()

    def __str__(self):
        return f'Table {self.table_number} - {self.seats} seats'


class Booking(models.Model):
    user= models.ForeignKey(Customer, on_delete=models.CASCADE)
    table=models.ForeignKey(Table, on_delete=models.CASCADE)
    date=models.DateField()
    time=models.TimeField()
    guests=models.IntegerField()

    def __str__(self):
        return f'Booking for {self.user} on {self.date} at {self.time}'

def default_image():
    return 'images/default-dish.jpg'

class Special(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='specials/', default=default_image)
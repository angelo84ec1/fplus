from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("send_email/", views.contacto),
    path("enviar_email/", views.escribenos),
]
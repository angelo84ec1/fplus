from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from datetime import datetime
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


# from django.views.decorators.csrf import csrf_protect
# Create your views here.
def index(request):
    return HttpResponse("Hello World")


sg = SendGridAPIClient(api_key="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")



# @csrf_protect
def contacto(request):
    print("request")
    nombre = request.POST.get("nombre")
    apellido = request.POST.get("apellido")
    pais = request.POST.get("pais")
    provincia = request.POST.get("provincia")
    telefono = request.POST.get("telefono")
    email = request.POST.get("email")
    comentarios = request.POST.get("comentarios")
    nombremarca = request.POST.get("nombremarca")

    if (
        nombre != ""
        and apellido != ""
        and telefono != ""
        and email != ""
        and comentarios != ""
    ):
        subjtect = "Mensaje desde franquiciaplus.com/" + nombremarca
        message = "Este mensaje fue enviado por: " + nombre + " " + apellido + "\n"
        message += "Su e-mail es: " + email + "\n"
        message += "Mensaje: " + comentarios + "\n"
        message += "Pais de interes: " + pais + "\n"
        message += "Provincia de interes: " + provincia + "\n"
        message += "Telefono: " + telefono + "\n"
        message += "Enviado el: " + datetime.today().strftime("%Y-%m-%d %H:%M:%S")
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [
            "asesoria@franquiciaplus.com",
        ]
        # recipient_list=[settings.EMAIL_HOST_USER,"bryan08_2011@hotmail.com"]
        # recipient_list=["bryan08_2011@hotmail.com","brayanj041998@gmail.com"]

        # send_mail(subjetct, message, email_from, recipient_list)
        email = Mail(
            from_email=email_from,
            to_emails=recipient_list,
            subject=subjtect,
            html_content=message,
        )
        response = sg.send(email)
        print(response.body)
        print(response.headers)

        return JsonResponse(
            {"response": "Gracias por escribirnos, pronto nos pondremos en contacto."},
            safe=False,
        )
    else:
        return JsonResponse(
            {"response": "Lo sentimos, debe llenar todos los campos"}, safe=False
        )


def escribenos(request):
    nombres = request.POST.get("nombres")
    apellidos = request.POST.get("apellidos")
    email = request.POST.get("email")
    telefono = request.POST.get("telefono")
    pais = request.POST.get("pais")
    comentarios = request.POST.get("comentarios")

    if (
        nombres != ""
        and apellidos != ""
        and email != ""
        and telefono != ""
        and comentarios != ""
    ):
        subjetct = "Mensaje desde franquiciaplus.com/contactanos"
        message = "Este mensaje fue enviado por: " + nombres + " " + apellidos + "\n"
        message += "Su e-mail es: " + email + "\n"
        message += "WhatsApp: " + telefono + "\n"
        message += "Pais de interes: " + pais + "\n"
        message += "Mensaje: " + comentarios + "\n"
        message += "Enviado el: " + datetime.today().strftime("%Y-%m-%d %H:%M:%S")
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [
            "asesoria@franquiciaplus.com",
        ]
        # recipient_list=["bryan08_2011@hotmail.com","brayanj041998@gmail.com"]

        # send_mail(subjetct, message, email_from, recipient_list)
        email = Mail(
            from_email=email_from,
            to_emails=recipient_list,
            subject=subjetct,
            html_content=message,
        )
        response = sg.send(email)
        print(response.body)
        print(response.headers)

        return JsonResponse(
            {
                "response": "Gracias por escribirnos, pronto un asesor se contactara contigo"
            },
            safe=False,
        )
    else:
        HttpResponseBadRequest("Lo sentimos, debe llenar todos los campos")
        return JsonResponse(
            {"response": "Lo sentimos, debe llenar todos los campos"}, safe=False
        )

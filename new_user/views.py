from django.shortcuts import render

def register(request):
    return render(request, 'new_user/registration.html')
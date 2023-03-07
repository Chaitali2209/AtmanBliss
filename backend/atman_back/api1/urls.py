from django.urls import path
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from rest_framework.response import Response
from .views import RegisterView, MyTokenView
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)
urlpatterns = [
    path('token/', MyTokenView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('', getRoutes),
]
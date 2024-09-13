from django.urls import path
from rest_framework import routers
from api.v1.marca.views import DirectorioViewSet, EstadoViewSet, InversionViewSet, MarcaViewSet, CategoriaViewSet, UbicacionViewSet, DetalleMarcaViewSet

router = routers.SimpleRouter()
router.register(r'marcas', MarcaViewSet, basename="marcas")
router.register(r'categoria', CategoriaViewSet, basename="categoria")
router.register(r'ubicacion', UbicacionViewSet, basename="ubicacion")
router.register(r'inversion', InversionViewSet, basename="inversion")
router.register(r'estado', EstadoViewSet, basename="estado")
router.register(r'directorio', DirectorioViewSet, basename="directorio")
router.register(r'detallemarca', DetalleMarcaViewSet, basename="detallemarca")

urlpatterns = router.urls
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from pagination import MarcaPagination
from marca.models import (
    Directorio,
    Estado,
    Inversion,
    Marca,
    Categoria,
    Ubicacion,
    Detalle_Marca,
)
import logging

from api.v1.marca.serializers import (
    DirectorioSerializer,
    EstadoSerializer,
    MarcaSerializer,
    CategoriaSerializer,
    UbicacionSerializer,
    InversionSerializer,
    DetalleMarcaSerializer,
)
logger = logging.getLogger(__name__)

class MarcaViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = MarcaSerializer
    pagination_class = MarcaPagination
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    ordering_fields = ["prioridad", "created_at", "nombre", "precio"]
    ordering = ["prioridad", "-created_at"]
    search_fields = ["nombre", "categoria__nombre", "precio"]
    filterset_fields = {

        "precio": ["gte", "lte"],
        "categoria__nombre": ["exact"],
        "estado__nombre": ["exact"],
        "ubicacion__nombre": ["exact"],
        "directorio__nombre": ["exact"],
        "inversion__nombre_url": ["exact"],
    }
    logger.debug(filterset_fields)

    queryset = (
        Marca.objects.all()
        .prefetch_related("ubicacion", "directorio")
        .select_related(
            "estado",
            "inversion",
            "prioridad",
            "detalle_marca",
        )
    )



class CategoriaViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = CategoriaSerializer
    filter_backends = [OrderingFilter]
    ordering = ["nombre"]
    queryset = Categoria.objects.all()


class UbicacionViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = UbicacionSerializer
    filter_backends = [OrderingFilter]
    ordering = ["nombre"]
    queryset = Ubicacion.objects.all()


class InversionViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


    permission_classes = [AllowAny]  # Permitir acceso temporalmente para todos
    serializer_class = InversionSerializer
    filter_backends = [OrderingFilter]
    ordering = ["id"]
    queryset = Inversion.objects.all()

class EstadoViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = EstadoSerializer
    filter_backends = [OrderingFilter]
    ordering = ["nombre"]
    queryset = Estado.objects.all()


class DirectorioViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = DirectorioSerializer
    filter_backends = [OrderingFilter]
    ordering = ["nombre"]
    queryset = Directorio.objects.all()


class DetalleMarcaViewSet(viewsets.ModelViewSet):
    # Cache page for the requested url for 1 hour
    @method_decorator(cache_page(60 * 60 * 4))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    serializer_class = DetalleMarcaSerializer
    queryset = Detalle_Marca.objects.all()
    lookup_field = "url"

from rest_framework import serializers
from marca.models import (
    Estado,
    Inversion,
    Marca,
    Categoria,
    Ubicacion,
    Directorio,
    Detalle_Marca,
)


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        read_only_fields = [
            "id",
        ]
        fields = [
            "created_at",
            "nombre",
            "precio",
            "descripcion",
            "imagenmarca",
            "altimagenmarca",
            "titleimagenmarca",
            "imagenlocal",
            "altimagenlocal",
            "titleimagenlocal",
            "imagenlogo",
            "altimagenlogo",
            "titleimagenlogo",
            "categoria",
            "estado",
            "ubicacion",
            "directorio",
            "inversion",
            "prioridad",
            "detalle_marca",
            "urlmarca",
        ] + read_only_fields
        depth = 1


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        read_only_fields = [
            "id",
        ]
        fields = [
            "nombre",
        ] + read_only_fields


class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        read_only_fields = [
            "id",
        ]
        fields = [
            "nombre",
        ] + read_only_fields


class InversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inversion
        read_only_fields = [
            "id",
        ]
        fields = ["nombre", "nombre_url"] + read_only_fields


class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        read_only_fields = [
            "id",
        ]
        fields = [
            "nombre",
        ] + read_only_fields


class DirectorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Directorio
        read_only_fields = [
            "id",
        ]
        fields = [
            "nombre",
        ] + read_only_fields


class DetalleMarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detalle_Marca
        read_only_fields = [
            "id",
        ]
        fields = [
            "nombre",
            "url",
            "title_html",
            "description_html",
            "imagen_detalle_marca",
            "alt_imagen_detalle_marca",
            "title_imagen_detalle_marca",
            "descripcion",
            "color_detalle_marca",
            "color_texto_detalle_marca",
            "imagen_banner",
            "video_marca",
            "imagen_producto",
            "alt_imagen_producto",
            "title_imagen_producto",
            "titulo_promesa_valor",
            "color_texto_titulo_promesa_valor",
            "cuerpo_promesa_valor",
            "color_texto_cuerpo_promesa_valor",
            "color_promesa_valor",
            "imagen_local_1",
            "alt_imagen_local_1",
            "title_imagen_local_1",
            "imagen_local_2",
            "alt_imagen_local_2",
            "title_imagen_local_2",
            "imagen_local_3",
            "alt_imagen_local_3",
            "title_imagen_local_3",
            "imagen_local_4",
            "alt_imagen_local_4",
            "title_imagen_local_4",
            "imagen_local_5",
            "alt_imagen_local_5",
            "title_imagen_local_5",
            "imagen_local_6",
            "alt_imagen_local_6",
            "title_imagen_local_6",
            "color_puntos_carrusel",
            "color_ocho_cajas",
            "valor_marca",
            "ganancia_mensual",
            "valor_franquicia",
            "valor_adecuacion_local",
            "regalias",
            "fee_de_marketing",
            "duracion_contrato",
            "valor_renovacion",
            "metros_local",
            "recuperacion_inversion",
            "poblacion_minima",
            "auditoria_soporte",
            "franquicias_en_ecuador",
            "imagen_formulario",
            "alt_imagen_formulario",
            "title_imagen_formulario",
            "color_boton_formulario",
            "script_clientify",
        ] + read_only_fields
        lookup_field = "url"

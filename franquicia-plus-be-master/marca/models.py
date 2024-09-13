from django.db import models
import os
from django.utils.text import slugify
from colorfield.fields import ColorField
from django.core.cache import cache

# Create your models here.


class Categoria(models.Model):
    nombre = models.CharField(max_length=50, unique=True, verbose_name="Nombre")
    iconofp = models.CharField(
        max_length=30, verbose_name="Icono de la Categoría", null=True
    )

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


class Estado(models.Model):
    nombre = models.CharField(max_length=30, unique=True, verbose_name="Nombre")

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


class Ubicacion(models.Model):
    nombre = models.CharField(max_length=30, unique=True, verbose_name="Nombre")

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


class Directorio(models.Model):
    nombre = models.CharField(max_length=30, unique=True, verbose_name="Nombre")

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


class Inversion(models.Model):
    nombre = models.CharField(
        max_length=30, unique=True, verbose_name="Rango de Inversión"
    )
    nombre_url = models.CharField(
        max_length=30,
        unique=True,
        verbose_name="Rango de Inversión url",
        null=True,
        blank=True,
        help_text="Es el rango de inversion que se utilizara para la url debera ir sin espacios vacios y sin caracteres especiales",
    )

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


# class Estrellas(models.Model):
#     nombre = models.IntegerField(unique=True, verbose_name="Número de Estrellas")

#     def __str__(self):
#         return self.nombre


class Prioridad(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, verbose_name="Nombre de la Prioridad"
    )
    valor = models.IntegerField(
        unique=True, null=True, verbose_name="Prioridad en orden de franquicias"
    )

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        cache.clear()
        return super().save(*args, **kwargs)


class Detalle_Marca(models.Model):
    nombre = models.CharField(
        max_length=30,
        unique=True,
        verbose_name="Nombre",
        help_text="Este item sirve para saber de que página llegan los formularios",
    )
    url = models.SlugField(max_length=255, unique=True, verbose_name="Url de la Marca")
    title_html = models.CharField(
        max_length=70,
        verbose_name="Title HTML",
        help_text="Máximo 70 caracteres",
        null=True,
        blank=True,
    )
    description_html = models.CharField(
        max_length=160,
        verbose_name="Description HTML",
        help_text="Máximo 160 caracteres",
        null=True,
        blank=True,
    )
    imagen_detalle_marca = models.ImageField(
        upload_to="photos/detalle-franquicias/detalle-marca",
        verbose_name="Imagen Detalle Marca",
        help_text="Tamaño de la imagen 96px de alto",
    )
    alt_imagen_detalle_marca = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Detalle Marca",
        null=True,
        blank=True,
    )
    title_imagen_detalle_marca = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Detalle Marca",
        null=True,
        blank=True,
    )
    descripcion = models.TextField(
        max_length=300, verbose_name="Descripción", help_text="Máximo 300 caracteres"
    )
    color_detalle_marca = ColorField(default="#FFFFFF")
    color_texto_detalle_marca = ColorField(default="#FFFFFF")
    imagen_banner = models.ImageField(
        upload_to="photos/detalle-franquicias/banner",
        verbose_name="Imagen Banner",
        help_text="Tamaño de la imagen 1920px de ancho x 856px de alto",
    )
    video_marca = models.CharField(max_length=150, verbose_name="Url video")
    imagen_producto = models.ImageField(
        upload_to="photos/detalle-franquicias/producto",
        verbose_name="Imagen Producto",
        help_text="Tamaño de la imagen 224px de alto",
    )
    alt_imagen_producto = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Producto",
        null=True,
        blank=True,
    )
    title_imagen_producto = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Producto",
        null=True,
        blank=True,
    )
    titulo_promesa_valor = models.CharField(
        max_length=70,
        verbose_name="Titulo promesa de valor",
        help_text="Máximo 70 caracteres",
    )
    color_texto_titulo_promesa_valor = ColorField(default="#FFFFFF")
    cuerpo_promesa_valor = models.TextField(
        max_length=600,
        verbose_name="Cuerpo promesa de valor",
        help_text="Máximo 600 caracteres",
    )
    color_texto_cuerpo_promesa_valor = ColorField(default="#FFFFFF")
    color_promesa_valor = ColorField(default="#FFFFFF")
    imagen_local_1 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-1",
        verbose_name="Imagen Local 1",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_1 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 1",
        null=True,
        blank=True,
    )
    title_imagen_local_1 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 1",
        null=True,
        blank=True,
    )
    imagen_local_2 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-2",
        verbose_name="Imagen Local 2",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_2 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 2",
        null=True,
        blank=True,
    )
    title_imagen_local_2 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 2",
        null=True,
        blank=True,
    )
    imagen_local_3 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-3",
        verbose_name="Imagen Local 3",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_3 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 3",
        null=True,
        blank=True,
    )
    title_imagen_local_3 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 3",
        null=True,
        blank=True,
    )
    imagen_local_4 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-4",
        verbose_name="Imagen Local 4",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_4 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 4",
        null=True,
        blank=True,
    )
    title_imagen_local_4 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 4",
        null=True,
        blank=True,
    )
    imagen_local_5 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-5",
        verbose_name="Imagen Local 5",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_5 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 5",
        null=True,
        blank=True,
    )
    title_imagen_local_5 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 5",
        null=True,
        blank=True,
    )
    imagen_local_6 = models.ImageField(
        upload_to="photos/detalle-franquicias/local-6",
        verbose_name="Imagen Local 6",
        help_text="Tamaño de la imagen 366px de ancho x 250px de alto",
    )
    alt_imagen_local_6 = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local 6",
        null=True,
        blank=True,
    )
    title_imagen_local_6 = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local 6",
        null=True,
        blank=True,
    )
    color_puntos_carrusel = ColorField(
        default="#d6d6d6",
        help_text="Color para los puntos o circulos que aparecen debajo del carrusel de imagenes en pantallas pequeñas",
    )
    color_ocho_cajas = ColorField(default="#FFFFFF")
    valor_marca = models.IntegerField(
        verbose_name="Empieza tu negocio desde", default=0
    )
    ganancia_mensual = models.CharField(max_length=20, verbose_name="Ganancia Mensual")
    valor_franquicia = models.IntegerField(verbose_name="Valor Franquicia", default=0)
    valor_adecuacion_local = models.IntegerField(
        verbose_name="Valor Adecuación Local", default=0
    )
    regalias = models.CharField(max_length=20, verbose_name="Regalias")
    fee_de_marketing = models.CharField(max_length=20, verbose_name="Fee de Marketing")
    duracion_contrato = models.CharField(
        max_length=20, verbose_name="Duración de Contrato"
    )
    valor_renovacion = models.IntegerField(
        verbose_name="Valor Renovación",
        default=0,
        help_text="Ingrese -1 para obtener un (-) o -2 para obtener (N/A)",
    )
    metros_local = models.CharField(max_length=20, verbose_name="Metros local")
    recuperacion_inversion = models.CharField(
        max_length=20, verbose_name="Recuperación de Inversión"
    )
    poblacion_minima = models.IntegerField(verbose_name="Población mínima", default=0)
    auditoria_soporte = models.BooleanField(
        help_text="Marque la casilla si se da auditoria y Soporte"
    )
    franquicias_en_ecuador = models.CharField(
        max_length=20, verbose_name="Número de Franquicias en Ecuador", default=0
    )
    imagen_formulario = models.ImageField(
        upload_to="photos/detalle-franquicias/formulario",
        verbose_name="Imagen Formulario",
        help_text="Tamaño de la imagen 150px de alto",
    )
    alt_imagen_formulario = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Formulario",
        null=True,
        blank=True,
    )
    title_imagen_formulario = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Formulario",
        null=True,
        blank=True,
    )
    color_boton_formulario = ColorField(default="#FFFFFF")
    script_clientify = models.CharField(
        max_length=150, verbose_name="Script Clientify", null=True, blank=True
    )

    def saveslug(self, *args, **kwargs):
        self.url = slugify(self.url)
        super(Detalle_Marca, self).save(*args, **kwargs)

    def remove_on_image_update(self):
        try:
            # is the object in the database yet?
            obj = Detalle_Marca.objects.get(id=self.id)
        except Detalle_Marca.DoesNotExist:
            # object is not in db, nothing to worry about
            return
        # is the save due to an update of the actual image file?
        if (
            obj.imagen_detalle_marca
            and self.imagen_detalle_marca
            and obj.imagen_detalle_marca != self.imagen_detalle_marca
        ):
            # delete the old image file from the storage in favor of the new file
            obj.imagen_detalle_marca.delete()
        elif (
            obj.imagen_banner
            and self.imagen_banner
            and obj.imagen_banner != self.imagen_banner
        ):
            obj.imagen_banner.delete()
        elif (
            obj.imagen_producto
            and self.imagen_producto
            and obj.imagen_producto != self.imagen_producto
        ):
            obj.imagen_producto.delete()
        elif (
            obj.imagen_local_1
            and self.imagen_local_1
            and obj.imagen_local_1 != self.imagen_local_1
        ):
            obj.imagen_local_1.delete()
        elif (
            obj.imagen_local_2
            and self.imagen_local_2
            and obj.imagen_local_2 != self.imagen_local_2
        ):
            obj.imagen_local_2.delete()
        elif (
            obj.imagen_local_3
            and self.imagen_local_3
            and obj.imagen_local_3 != self.imagen_local_3
        ):
            obj.imagen_local_3.delete()
        elif (
            obj.imagen_local_4
            and self.imagen_local_4
            and obj.imagen_local_4 != self.imagen_local_4
        ):
            obj.imagen_local_4.delete()
        elif (
            obj.imagen_local_5
            and self.imagen_local_5
            and obj.imagen_local_5 != self.imagen_local_5
        ):
            obj.imagen_local_5.delete()
        elif (
            obj.imagen_local_6
            and self.imagen_local_6
            and obj.imagen_local_6 != self.imagen_local_6
        ):
            obj.imagen_local_6.delete()
        elif (
            obj.imagen_formulario
            and self.imagen_formulario
            and obj.imagen_formulario != self.imagen_formulario
        ):
            obj.imagen_formulario.delete()

    def delete(self, *args, **kwargs):
        # object is being removed from db, remove the file from storage first
        self.imagen_detalle_marca.delete()
        self.imagen_banner.delete()
        self.imagen_producto.delete()
        self.imagen_local_1.delete()
        self.imagen_local_2.delete()
        self.imagen_local_3.delete()
        self.imagen_local_4.delete()
        self.imagen_local_5.delete()
        self.imagen_local_6.delete()
        self.imagen_formulario.delete()
        return super(Detalle_Marca, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        cache.clear()
        self.remove_on_image_update()
        return super(Detalle_Marca, self).save(*args, **kwargs)

    def __str__(self):
        return "{} Url: {}".format(self.nombre, self.url)


class Marca(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    nombre = models.CharField(max_length=30, unique=True, verbose_name="Nombre")
    precio = models.IntegerField(verbose_name="Precio", default=0)
    inversion = models.ForeignKey(
        Inversion, on_delete=models.CASCADE, verbose_name="Rango de Inversión"
    )
    descripcion = models.TextField(
        max_length=160,
        verbose_name="Descripción",
        help_text="El máximo de caracteres es 160",
    )
    imagenmarca = models.ImageField(
        upload_to="photos/franquicia/marca",
        verbose_name="Imagen Marca",
        help_text="Tamaño de la imagen 480 de ancho x 338 de alto",
    )
    altimagenmarca = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Marca",
        null=True,
        blank=True,
    )
    titleimagenmarca = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Marca",
        null=True,
        blank=True,
    )
    imagenlocal = models.ImageField(
        upload_to="photos/franquicia/local",
        verbose_name="Imagen Local",
        help_text="Tamaño de la imagen 480 de ancho x 338 de alto",
    )
    altimagenlocal = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Local",
        null=True,
        blank=True,
    )
    titleimagenlocal = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Local",
        null=True,
        blank=True,
    )
    imagenlogo = models.ImageField(
        upload_to="photos/franquicia/logo",
        verbose_name="Imagen Logo",
        help_text="Tamaño de la imagen 40 de ancho x 40 de alto",
    )
    altimagenlogo = models.CharField(
        max_length=80,
        verbose_name="Atributo alt de la Imagen Logo",
        null=True,
        blank=True,
    )
    titleimagenlogo = models.CharField(
        max_length=80,
        verbose_name="Atributo title de la Imagen Logo",
        null=True,
        blank=True,
    )
    categoria = models.ForeignKey(
        Categoria, on_delete=models.CASCADE, related_name="marcas"
    )
    estado = models.ForeignKey(
        Estado,
        on_delete=models.CASCADE,
        related_name="marcas",
        null=True,
        blank=True,
        help_text="Se recomienda agregar 9 marcas en Promoción y 9 marcas en Nuevo",
    )
    ubicacion = models.ManyToManyField(Ubicacion, related_name="marcas")
    directorio = models.ManyToManyField(Directorio, related_name="marcas", blank=True)
    # numeroestrellas = (
    #     ('1','Una'),
    #     ('2','Dos'),
    #     ('3','Tres'),
    #     ('4','Cuatro'),
    #     ('5','Cinco'),
    # )
    # estrellas = models.CharField(choices=numeroestrellas, max_length=5, help_text="Proximamente" , null=True, blank=True)
    prioridad = models.ForeignKey(
        Prioridad,
        on_delete=models.CASCADE,
        verbose_name="Prioridad en el orden de franquicias",
        blank=True,
        null=True,
    )
    detalle_marca = models.OneToOneField(
        Detalle_Marca,
        on_delete=models.CASCADE,
        verbose_name="Detalle Marcas",
        blank=True,
        null=True,
    )
    urlmarca = models.CharField(
        max_length=50,
        verbose_name="Url de la marca",
        help_text="Url de la marca por ejemplo bubble-waffle",
        blank=True,
        null=True,
    )

    def remove_on_image_update(self):
        try:
            # is the object in the database yet?
            obj = Marca.objects.get(id=self.id)
        except Marca.DoesNotExist:
            # object is not in db, nothing to worry about
            return
        # is the save due to an update of the actual image file?
        if obj.imagenmarca and self.imagenmarca and obj.imagenmarca != self.imagenmarca:
            # delete the old image file from the storage in favor of the new file
            obj.imagenmarca.delete()
        elif (
            obj.imagenlocal and self.imagenlocal and obj.imagenlocal != self.imagenlocal
        ):
            obj.imagenlocal.delete()
        elif obj.imagenlogo and self.imagenlogo and obj.imagenlogo != self.imagenlogo:
            obj.imagenlogo.delete()

    def delete(self, *args, **kwargs):
        # object is being removed from db, remove the file from storage first
        self.imagenmarca.delete()
        self.imagenlocal.delete()
        self.imagenlogo.delete()
        return super(Marca, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        cache.clear()
        self.remove_on_image_update()
        return super(Marca, self).save(*args, **kwargs)

    def __str__(self):
        return "{} Precio: {}".format(self.nombre, self.precio)

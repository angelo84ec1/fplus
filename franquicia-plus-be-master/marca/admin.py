from django.contrib import admin

from marca.models import Marca, Categoria, Ubicacion, Directorio, Estado, Inversion, Prioridad ,Detalle_Marca


class MarcaAdmin(admin.ModelAdmin):
    """Administración de Marca"""
    list_display = ("nombre", "estado", "precio","inversion")
    search_fields = ("nombre",)
    list_filter = ("estado", "categoria", "ubicacion")

class CategoriaAdmin(admin.ModelAdmin):
    """Administración de Categoria"""
    search_fields = ("nombre",)

class UbicacionAdmin(admin.ModelAdmin):
    """Administración de Ubicacion"""
    search_fields = ("nombre",)

class DetalleMarcaAdmin(admin.ModelAdmin):
    """Administración de Detalle Marca"""
    list_display = ("nombre", "url")
    search_fields = ("nombre", "url")
    list_filter = ("auditoria_soporte",)



admin.site.site_header = 'Administración Franquicia Plus'
admin.site.index_title = 'Panel de Control Franquicia Plus'
admin.site.register(Marca, MarcaAdmin)
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Ubicacion, UbicacionAdmin)
admin.site.register(Directorio)
admin.site.register(Estado)
admin.site.register(Inversion)
admin.site.register(Prioridad)
admin.site.register(Detalle_Marca, DetalleMarcaAdmin)

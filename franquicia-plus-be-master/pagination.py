from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class MarcaPagination(PageNumberPagination):
    page_size = 9
    page_size_query_param = "page_size"
    max_page_size = 100
    # page_obj.paginator.num_pages =

    def get_paginated_response(self, data):
            return Response({
                'links': {
                    'next': self.get_next_link(),
                    'previous': self.get_previous_link()
                },
                'total_pages': self.page.paginator.num_pages,
                'count': self.page.paginator.count,
                'results': data
            })
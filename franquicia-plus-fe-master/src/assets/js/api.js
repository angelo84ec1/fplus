import axios from 'axios'
import { apiBaseUrl } from '~/constants'

const apiMarcas = {
  Marcas: function () {
    return axios.get(`${apiBaseUrl}/api/v1/marcas/`)
  },
  filtrarMarcas: function (filtros) {
    return axios.get(`${apiBaseUrl}/api/v1/marcas/?` + filtros)
  },
}

export default apiMarcas

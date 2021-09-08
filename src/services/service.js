import { stringify } from 'query-string'
import { fetchUtils } from 'ra-core'

export const DataService = (apiUrl, httpClient = fetchUtils.fetchJson) => ({
  getList: (resource, params) => {
    let { page, perPage } = params.pagination
    let rangeStart = (page - 1) * perPage
    const query = {
      page: JSON.stringify(rangeStart),
      limit: JSON.stringify(perPage)
    }

    if (params.filter) {
      Object.assign(query, params.filter)
    }

    const url = `${apiUrl}/${resource}?${stringify(query)}`
    const options = {}

    return httpClient(url, options).then(({ headers, json }) => {
      console.log(json)
      return {
        data: json.data,
        total: json.count
      }
    })
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json.data
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    return httpClient(url).then(({ json }) => ({ data: json.data }))
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    const options = {}

    return httpClient(url, options).then(({ headers, json }) => {
      return {
        data: json.data,
        total: json.count
      }
    })
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json.data })),

  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data)
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.data.id)
    })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.data.id }
    })),

  delete: (resource, params) => {
    console.log(params.id, 'single delete')
    return httpClient(`${apiUrl}/${resource}`, {
      method: 'DELETE',
      body: JSON.stringify({ ids: [params.id] }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(({ json }) => ({ data: json.data }))
  },

  deleteMany: (resource, params) => {
    console.log(params, 'single delete')
    return httpClient(`${apiUrl}/${resource}`, {
      method: 'DELETE',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(({ json }) => ({ data: json.data }))
  }
})

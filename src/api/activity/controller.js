import { success, notFound } from '../../services/response/'
import { Activity } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Activity.create(body)
    .then((activity) => activity.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Activity.find(query, select, cursor)
    .then((activities) => activities.map((activity) => activity.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Activity.findById(params.id)
    .then(notFound(res))
    .then((activity) => activity ? activity.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Activity.findById(params.id)
    .then(notFound(res))
    .then((activity) => activity ? Object.assign(activity, body).save() : null)
    .then((activity) => activity ? activity.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Activity.findById(params.id)
    .then(notFound(res))
    .then((activity) => activity ? activity.remove() : null)
    .then(success(res, 204))
    .catch(next)

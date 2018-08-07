import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Activity } from '.'

const app = () => express(apiRoot, routes)

let activity

beforeEach(async () => {
  activity = await Activity.create({})
})

test('POST /activities 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, userId: 'test', creationDate: 'test', title: 'test', description: 'test', categoty: 'test', subCategory: 'test', level: 'test', isExpert: 'test', location: 'test', radius: 'test', price: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.creationDate).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.categoty).toEqual('test')
  expect(body.subCategory).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.isExpert).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.radius).toEqual('test')
  expect(body.price).toEqual('test')
})

test('POST /activities 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /activities 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /activities 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /activities/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${activity.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activity.id)
})

test('GET /activities/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${activity.id}`)
  expect(status).toBe(401)
})

test('GET /activities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /activities/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${activity.id}`)
    .send({ access_token: masterKey, userId: 'test', creationDate: 'test', title: 'test', description: 'test', categoty: 'test', subCategory: 'test', level: 'test', isExpert: 'test', location: 'test', radius: 'test', price: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(activity.id)
  expect(body.userId).toEqual('test')
  expect(body.creationDate).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.categoty).toEqual('test')
  expect(body.subCategory).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.isExpert).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.radius).toEqual('test')
  expect(body.price).toEqual('test')
})

test('PUT /activities/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${activity.id}`)
  expect(status).toBe(401)
})

test('PUT /activities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, userId: 'test', creationDate: 'test', title: 'test', description: 'test', categoty: 'test', subCategory: 'test', level: 'test', isExpert: 'test', location: 'test', radius: 'test', price: 'test' })
  expect(status).toBe(404)
})

test('DELETE /activities/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${activity.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /activities/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${activity.id}`)
  expect(status).toBe(401)
})

test('DELETE /activities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

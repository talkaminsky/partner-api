import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Activity, { schema } from './model'

const router = new Router()
const { userId, creationDate, title, description, categoty, subCategory, level, isExpert, location, radius, price } = schema.tree

/**
 * @api {post} /activities Create activity
 * @apiName CreateActivity
 * @apiGroup Activity
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam userId Activity's userId.
 * @apiParam creationDate Activity's creationDate.
 * @apiParam title Activity's title.
 * @apiParam description Activity's description.
 * @apiParam categoty Activity's categoty.
 * @apiParam subCategory Activity's subCategory.
 * @apiParam level Activity's level.
 * @apiParam isExpert Activity's isExpert.
 * @apiParam location Activity's location.
 * @apiParam radius Activity's radius.
 * @apiParam price Activity's price.
 * @apiSuccess {Object} activity Activity's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ userId, creationDate, title, description, categoty, subCategory, level, isExpert, location, radius, price }),
  create)

/**
 * @api {get} /activities Retrieve activities
 * @apiName RetrieveActivities
 * @apiGroup Activity
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} activities List of activities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /activities/:id Retrieve activity
 * @apiName RetrieveActivity
 * @apiGroup Activity
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} activity Activity's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /activities/:id Update activity
 * @apiName UpdateActivity
 * @apiGroup Activity
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam userId Activity's userId.
 * @apiParam creationDate Activity's creationDate.
 * @apiParam title Activity's title.
 * @apiParam description Activity's description.
 * @apiParam categoty Activity's categoty.
 * @apiParam subCategory Activity's subCategory.
 * @apiParam level Activity's level.
 * @apiParam isExpert Activity's isExpert.
 * @apiParam location Activity's location.
 * @apiParam radius Activity's radius.
 * @apiParam price Activity's price.
 * @apiSuccess {Object} activity Activity's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ userId, creationDate, title, description, categoty, subCategory, level, isExpert, location, radius, price }),
  update)

/**
 * @api {delete} /activities/:id Delete activity
 * @apiName DeleteActivity
 * @apiGroup Activity
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Activity not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router

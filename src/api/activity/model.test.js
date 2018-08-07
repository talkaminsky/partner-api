import { Activity } from '.'

let activity

beforeEach(async () => {
  activity = await Activity.create({ userId: 'test', creationDate: 'test', title: 'test', description: 'test', categoty: 'test', subCategory: 'test', level: 'test', isExpert: 'test', location: 'test', radius: 'test', price: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = activity.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activity.id)
    expect(view.userId).toBe(activity.userId)
    expect(view.creationDate).toBe(activity.creationDate)
    expect(view.title).toBe(activity.title)
    expect(view.description).toBe(activity.description)
    expect(view.categoty).toBe(activity.categoty)
    expect(view.subCategory).toBe(activity.subCategory)
    expect(view.level).toBe(activity.level)
    expect(view.isExpert).toBe(activity.isExpert)
    expect(view.location).toBe(activity.location)
    expect(view.radius).toBe(activity.radius)
    expect(view.price).toBe(activity.price)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = activity.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(activity.id)
    expect(view.userId).toBe(activity.userId)
    expect(view.creationDate).toBe(activity.creationDate)
    expect(view.title).toBe(activity.title)
    expect(view.description).toBe(activity.description)
    expect(view.categoty).toBe(activity.categoty)
    expect(view.subCategory).toBe(activity.subCategory)
    expect(view.level).toBe(activity.level)
    expect(view.isExpert).toBe(activity.isExpert)
    expect(view.location).toBe(activity.location)
    expect(view.radius).toBe(activity.radius)
    expect(view.price).toBe(activity.price)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

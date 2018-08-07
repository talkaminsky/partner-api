import mongoose, { Schema } from 'mongoose'

const activitySchema = new Schema({
  userId: {
    type: String
  },
  creationDate: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  categoty: {
    type: String
  },
  subCategory: {
    type: String
  },
  level: {
    type: String
  },
  isExpert: {
    type: String
  },
  location: {
    type: String
  },
  radius: {
    type: String
  },
  price: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

activitySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      creationDate: this.creationDate,
      title: this.title,
      description: this.description,
      categoty: this.categoty,
      subCategory: this.subCategory,
      level: this.level,
      isExpert: this.isExpert,
      location: this.location,
      radius: this.radius,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Activity', activitySchema)

export const schema = model.schema
export default model

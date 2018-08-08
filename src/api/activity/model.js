import mongoose, { Schema } from 'mongoose'

const categories = ['Sport', 'Languages', 'Traveling', 'Hangout', 'Shopping', 'Computer Games', 'Entertainment', 'Other']

const activitySchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: {
      type: String,
      enum: categories,
      default: 'user',
      index: true,
      required: true
    }
  },
  keyWords: {
    type: [[String]]
  },
  level: {
    type: Number
  },
  isExpert: {
    type: Boolean
  },
  location: {
    type: {
      type: String
    },
    coordinates: []
  },
  radius: {
    type: Number
  },
  price: {
    type: Number
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
      title: this.title,
      description: this.description,
      category: this.category,
      keyWords: this.keyWords,
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

activitySchema.index({ availableAt: '2dsphere' })

const model = mongoose.model('Activity', activitySchema)

export const schema = model.schema
export default model

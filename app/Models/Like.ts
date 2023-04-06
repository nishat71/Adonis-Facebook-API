import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Like extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public post_id: number

  @column()
  public profile_id: number


  @column()
  public like_count: number



  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}

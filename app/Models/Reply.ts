import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public profile_id: number

  @column()
  public post_id: number
  
  @column()
  public comment_id: number

  @column()
  public reply_text: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Reply from './Reply'


export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post_id: number


  @column()
  public profile_id: number


  @column()
  public comment_text: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Reply, {
    localKey: 'id', 
    foreignKey: 'profile_id',
  })
  public replies: HasMany<typeof Reply>
}

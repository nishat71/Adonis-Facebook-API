import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Like from './Like'
import Comment from './Comment'


export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public user_id: number
  
  @column()
  public post_text: string



  // @column()
  // public like_count: number


  @column()
  public disabled: boolean


  // @column()
  // public comments: string


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime



  @hasMany(() => Like, {
    foreignKey: 'post_id',
    localKey: 'id'
  })
  public likes: HasMany<typeof Like>


  
  @hasMany(() => Comment, {
    foreignKey: 'post_id',
    localKey: 'id'
  })
  public comments: HasMany<typeof Comment>

}

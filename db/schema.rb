# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170115040920) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sofas", force: :cascade do |t|
    t.string   "address",                                                                                                              null: false
    t.string   "city",                                                                                                                 null: false
    t.string   "num_of_guests",                                                                                                        null: false
    t.binary   "picture",       default: "http://res.cloudinary.com/dgzdk4eq8/image/upload/v1484452229/no_photo_available_mozjhl.jpg"
    t.integer  "user_id",                                                                                                              null: false
    t.datetime "created_at",                                                                                                           null: false
    t.datetime "updated_at",                                                                                                           null: false
    t.string   "state"
    t.string   "zip"
    t.string   "lat"
    t.string   "lng"
  end

  add_index "sofas", ["user_id"], name: "index_sofas_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                                                                                                             null: false
    t.string   "last_name",                                                                                                              null: false
    t.string   "email",                                                                                                                  null: false
    t.binary   "picture",         default: "http://res.cloudinary.com/dgzdk4eq8/image/upload/v1484452229/no_photo_available_mozjhl.jpg"
    t.string   "password_digest",                                                                                                        null: false
    t.string   "session_token",                                                                                                          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end

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

ActiveRecord::Schema.define(version: 20180115170240) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boardpedals", force: :cascade do |t|
    t.bigint "pedal_id"
    t.bigint "pedalboard_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "x"
    t.integer "y"
    t.index ["pedal_id"], name: "index_boardpedals_on_pedal_id"
    t.index ["pedalboard_id"], name: "index_boardpedals_on_pedalboard_id"
  end

  create_table "effecttypes", force: :cascade do |t|
    t.string "name"
  end

  create_table "pedalboards", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_pedalboards_on_user_id"
  end

  create_table "pedalreviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "comment"
    t.bigint "pedal_id", null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pedal_id"], name: "index_pedalreviews_on_pedal_id"
    t.index ["user_id"], name: "index_pedalreviews_on_user_id"
  end

  create_table "pedals", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "effecttype_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "token"
    t.string "refresh_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

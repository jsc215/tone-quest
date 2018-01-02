# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pedal.destroy_all
Boardpedal.destroy_all
Pedalboard.destroy_all


Effecttype.destroy_all
Effecttype.create(name: "Overdrive")
Effecttype.create(name: "Distortion")
Effecttype.create(name: "Fuzz")
Effecttype.create(name: "Modulation")
Effecttype.create(name: "Reverb and Delay")
Effecttype.create(name: "Compression")
Effecttype.create(name: "Special Effect")
Effecttype.create(name: "Octavers and Harmonizers")


Pedal.create(
  name: "Boss Blues Driver",
  effecttype_id: 1,
  image_url:"https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630"
)

Pedal.create(
  name: "Ibanez Tube Screamer - TS808",
  effecttype_id: 1,
  image_url:"http://www.ibanez.com/products/images/effects2017/5.png"
)

Pedal.create(
  name: "Big Muff Pi",
  effecttype_id: 3,
  image_url:"http://www.kitrae.net/music/Images_Secret_Music_Page/Classic%20Big%20Muff%20Pi.png"
)

Pedal.create(
  name: "Boss DS-1",
  effecttype_id: 2,
  image_url:"http://www.musicianswarehousedubai.com/media/ecom/prodlg/LDS1FrontFlat-1024x768.png"
)

Pedal.create(
  name: "MXR Phase 90",
  effecttype_id: 4,
  image_url:"https://puzzlesounds.com/wp-content/uploads/2016/05/mxr-phase-90.png"
)

Pedal.create(
  name: "Boss DD-7",
  effecttype_id: 5,
  image_url:"http://www.musicianswarehousedubai.com/media/ecom/prodlg/Lroland_dd-7_2.png"
)

Pedal.create(
  name: "MXR dynacomp",
  effecttype_id: 6,
  image_url:"http://static1.squarespace.com/static/5767f5fc6b8f5b316becd639/5852d892f7e0abd2f64f9342/587aba0b9f745611b9f832e5/1486419562820/mxr-dynacomp.png?format=1000w"
)

Pedal.create(
  name: "Dunlop Cry Baby Wah Pedal",
  effecttype_id: 7,
  image_url:"https://www.vintageandmodernguitars.co.uk/wp-content/uploads/2016/01/CryBaby-11.png"
)

Pedal.create(
  name: "Mercury Flanger",
  effecttype_id: 4,
  image_url:"http://cdn.shopify.com/s/files/1/0888/3684/products/SA240_grande.png?v=1509733992"
)
Pedal.create(
  name: "Electro-Harmonix Holy Grail Nano Reverb",
  effecttype_id: 5,
  image_url:"https://static1.squarespace.com/static/5767f5fc6b8f5b316becd639/5852d7a6d1758e0997276970/587acc08bf629abac08d5910/1484442640590/EHX+Holy+Grail+%28the+ONE%29.png?format=500w"
)

Pedal.create(
  name: "Miku Stomp Pedal",
  effecttype_id: 7,
  image_url:"http://cdn.korg.com/us/products/upload/2babaa740f37fc6e461e308375d7785b_pc.png",
  description: 'Strangest guitar pedal in the world!'
)

Pedalboard.create(
  name: The Blues Pedalboard,
  user_id: 1
)

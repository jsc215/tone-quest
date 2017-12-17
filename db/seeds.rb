# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pedal.destroy_all

Pedal.create(
  name: "Boss Blues Driver",
  effect_type: "Overdrive",
  image_url:"https://images.reverb.com/image/upload/s--gMIxmmIm--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1497303942/htxzckzbqpuy76a3edhn.jpg"
)

Pedal.create(
  name: "Ibanez Tube Screamer - TS-808",
  effect_type: "Overdrive",
  image_url:"http://images.equipboard.com/uploads/item/image/736/ibanez-ts808-the-original-tube-screamer-xl.jpg?v=1513342736"
)

Pedal.create(
  name: "Big Muff Pi",
  effect_type: "Fuzz",
  image_url:"https://www.ehx.com/assets/blog/tone-tips7-bigmuff.jpg"
)

Pedal.create(
  name: "Boss DS-1",
  effect_type: "Distortion",
  image_url:"https://media.sweetwater.com/api/i/q-82__ha-5ddfa43ddf188355__hmac-6f4591f179fdaf0120763a0f203b691e0784366c/images/items/750/DS1-large.jpg"
)

Pedal.create(
  name: "MXR Phase 90",
  effect_type: "Modulation",
  image_url:"https://www.guitarchalk.com/wp-content/uploads/2016/03/Best-Phaser-Pedal-4-1.jpg"
)

Pedal.create(
  name: "Boss DD-7",
  effect_type: "Reverb and Delay",
  image_url:"https://media.sweetwater.com/api/i/q-82__ha-72ed525488f5ed85__hmac-817b79cd564a235b0558e0405c077c729211f128/images/items/750/DD7-large.jpg"
)

Pedal.create(
  name: "Keeley Compressor",
  effect_type: "Compressors and Limiters",
  image_url:"http://media.musiciansfriend.com/is/image/MMGS7/Compressor-Guitar-Effect-Pedal/150355000000000-00-500x500.jpg"
)

Pedal.create(
  name: "Dunlop Cry Baby Wah Pedal",
  effect_type: "Special Effects",
  image_url:"https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg"
)

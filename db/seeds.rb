# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
#
Effecttype.destroy_all
Pedal.destroy_all
Pedalboard.destroy_all
Boardpedal.destroy_all
Pedalreview.destroy_all

# Effect Types
Effecttype.create(name: "Overdrive")
Effecttype.create(name: "Distortion")
Effecttype.create(name: "Fuzz")
Effecttype.create(name: "Modulation")
Effecttype.create(name: "Reverb and Delay")
Effecttype.create(name: "Compression")
Effecttype.create(name: "Special Effect")
Effecttype.create(name: "Octavers and Harmonizers")

# Pedals
Pedal.create(name: "Boss Blues Driver", effecttype_id: 1, image_url: "https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630", description: Faker::Hipster.paragraphs)
Pedal.create(name:"Ibanez Tube Screamer - TS808", effecttype_id: 1, image_url: "http://www.ibanez.com/products/images/effects2017/5.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Big Muff Pi", effecttype_id: 3, image_url: "http://www.kitrae.net/music/Images_Secret_Music_Page/Classic%20Big%20Muff%20Pi.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Boss DS-1", effecttype_id: 2, image_url: "http://www.musicianswarehousedubai.com/media/ecom/prodlg/LDS1FrontFlat-1024x768.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "MXR Phase 90", effecttype_id: 4, image_url: "https://puzzlesounds.com/wp-content/uploads/2016/05/mxr-phase-90.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Boss DD-7", effecttype_id: 5, image_url: "http://www.musicianswarehousedubai.com/media/ecom/prodlg/Lroland_dd-7_2.png", description: Faker::Hipster.paragraphs )
Pedal.create(name: "MXR dynacomp", effecttype_id: 6, image_url: "http://static1.squarespace.com/static/5767f5fc6b8f5b316becd639/5852d892f7e0abd2f64f9342/587aba0b9f745611b9f832e5/1486419562820/mxr-dynacomp.png?format=1000w", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Dunlop Cry Baby Wah Pedal", effecttype_id: 7, image_url: "https://www.vintageandmodernguitars.co.uk/wp-content/uploads/2016/01/CryBaby-11.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Mercury Flanger", effecttype_id: 4, image_url: "http://cdn.shopify.com/s/files/1/0888/3684/products/SA240_grande.png?v=1509733992", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Electro-Harmonix Holy Grail Nano Reverb", effecttype_id: 5, image_url: "https://static1.squarespace.com/static/5767f5fc6b8f5b316becd639/5852d7a6d1758e0997276970/587acc08bf629abac08d5910/1484442640590/EHX+Holy+Grail+%28the+ONE%29.png?format=500w", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Miku Stomp Pedal", effecttype_id: 7, image_url: "http://cdn.korg.com/us/products/upload/2babaa740f37fc6e461e308375d7785b_pc.png", description: 'Strangest guitar pedal in the world!')
Pedal.create(name: "Tech 21 Boost Comp", effecttype_id: 6, image_url: "http://sbmusic.in/image/cache/Tech%2021%20Boost%20Compressor-800x800.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Boss BF-3 Stereo Flanger Pedal", effecttype_id: 4, image_url: "http://cdn.shopify.com/s/files/1/0856/7056/products/Boss_BF-3_Flanger_grande.png?v=1481741759", description: Faker::Hipster.paragraphs)
Pedal.create(name: "XL Cream Fuzz", effecttype_id: 3, image_url: "http://static.kvraudio.com/i/b/bigcreamfuzz.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Walrus Audio 385 Overdrive", effecttype_id: 1, image_url: "http://cdn.shopify.com/s/files/1/0987/8460/products/385r_Front__43222.1487617204.1200.1200_800x.png?v=1493097397", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Dark Matter Distortion", effecttype_id: 2, image_url: "http://cdn-downloads.tcelectronic.com/media/164593/dark-matter-distortion-front.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Gross Distortion", effecttype_id: 2, image_url: "http://www.joegore.com/wp-content/uploads/2015/09/Gross_crop.png",  description: Faker::Hipster.paragraphs)
Pedal.create(name: "Fuzz Face", effecttype_id: 3, image_url: "https://www.long-mcquade.com/files/15697/JDF2FuzzFaceDistortion-11.png",  description: Faker::Hipster.paragraphs)
Pedal.create(name: "Hall of Fame Reverb", effecttype_id: 5, image_url: "http://cdn-downloads.tcelectronic.com/media/164683/hall-of-fame-reverb-front.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Grace Compressor", effecttype_id: 6, image_url: "https://i.pinimg.com/originals/01/41/a5/0141a55684d92fb635e2a7585eaa913e.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Malekko E.Filter Envelope Filter", effecttype_id: 7, image_url: "https://malekkoheavyindustry.com/content/uploads/2011/12/malekko_efilter.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "TC Electronic Quintessence Harmonizer", effecttype_id: 8, image_url: "https://images.reverb.com/image/upload/s--O2tsXSLz--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1512673420/pxfnf96dj9qafsmaebmy.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Eventide Pitchfactor", effecttype_id: 8, image_url: "http://pedalsfusion.com/wp-content/uploads/2015/07/pf-png.png", description: Faker::Hipster.paragraphs)
Pedal.create(name: "Dr. Green Octa Dose", effecttype_id: 8, image_url: "http://ashdownmusic.com/files/product/img/img_20160421101820_29869.png", description: Faker::Hipster.paragraphs)


# Pedalboards
Pedalboard.create(name: 'Crazy Awesome Pedalboard', user_id: 1 )
Pedalboard.create(name: 'Surf Board', user_id: 1)
Pedalboard.create(name: 'All Aboard', user_id: 1)
Pedalboard.create(name: 'Board of Directors', user_id: 1)
Pedalboard.create(name: 'Chopin Board', user_id: 1)
Pedalboard.create(name: 'The Board Room', user_id: 1)
Pedalboard.create(name: 'Wish You Were Here', user_id: 1)
Pedalboard.create(name: 'Us and Them', user_id: 1)
Pedalboard.create(name: 'Pulse', user_id: 1)
Pedalboard.create(name: 'Lucille', user_id: 1)

# Boardpedals - pedals specific to a pedalboard. Boardpedal is a join table.
Boardpedal.create(pedal_id:  1, pedalboard_id: 1)
Boardpedal.create(pedal_id: 5, pedalboard_id: 1)
Boardpedal.create(pedal_id: 6, pedalboard_id: 1)
Boardpedal.create(pedal_id: 20, pedalboard_id: 1)
Boardpedal.create(pedal_id: 7, pedalboard_id: 1)
Boardpedal.create(pedal_id: 3, pedalboard_id: 1)
Boardpedal.create(pedal_id: 11, pedalboard_id: 1)
Boardpedal.create(pedal_id: 13, pedalboard_id: 1)
Boardpedal.create(pedal_id: 12, pedalboard_id: 1)
Boardpedal.create(pedal_id: 2, pedalboard_id: 1)

Boardpedal.create(pedal_id: 3, pedalboard_id: 2)
Boardpedal.create(pedal_id: 4, pedalboard_id: 2)
Boardpedal.create(pedal_id: 5, pedalboard_id: 2)
Boardpedal.create(pedal_id: 21, pedalboard_id: 2)
Boardpedal.create(pedal_id: 22, pedalboard_id: 2)
Boardpedal.create(pedal_id: 8, pedalboard_id: 2)

Boardpedal.create(pedal_id: 1, pedalboard_id: 3)
Boardpedal.create(pedal_id: 6, pedalboard_id: 3)
Boardpedal.create(pedal_id: 9, pedalboard_id: 3)
Boardpedal.create(pedal_id: 13, pedalboard_id: 3)
Boardpedal.create(pedal_id: 15, pedalboard_id: 3)
Boardpedal.create(pedal_id: 24, pedalboard_id: 3)

Boardpedal.create(pedal_id: 8, pedalboard_id: 4)
Boardpedal.create(pedal_id: 9, pedalboard_id: 4)
Boardpedal.create(pedal_id: 10, pedalboard_id: 4)
Boardpedal.create(pedal_id: 11, pedalboard_id: 4)
Boardpedal.create(pedal_id: 12, pedalboard_id: 4)
Boardpedal.create(pedal_id: 13, pedalboard_id: 4)

Boardpedal.create(pedal_id: 14, pedalboard_id: 5)
Boardpedal.create(pedal_id: 15, pedalboard_id: 5)
Boardpedal.create(pedal_id: 17, pedalboard_id: 5)
Boardpedal.create(pedal_id: 19, pedalboard_id: 5)
Boardpedal.create(pedal_id: 1, pedalboard_id: 5)
Boardpedal.create(pedal_id: 9, pedalboard_id: 5)

Boardpedal.create(pedal_id: 18, pedalboard_id: 6)
Boardpedal.create(pedal_id: 7, pedalboard_id: 6)
Boardpedal.create(pedal_id: 22, pedalboard_id: 6)
Boardpedal.create(pedal_id: 9, pedalboard_id: 6)
Boardpedal.create(pedal_id: 5, pedalboard_id: 6)
Boardpedal.create(pedal_id: 2, pedalboard_id: 6)


# Pedalreviews
Pedalreview.create(rating: 5, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 4, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 4, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 2, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 2, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)
Pedalreview.create(rating: 1, comment: Faker::Hacker.say_something_smart, pedal_id: 1, user_id: 1)


Pedalreview.create(rating: 5, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 5, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 2, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 4, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 2, user_id: 1)


Pedalreview.create(rating: 4, comment: Faker::Hacker.say_something_smart, pedal_id: 3, user_id: 1)
Pedalreview.create(rating: 2, comment: Faker::Hacker.say_something_smart, pedal_id: 3, user_id: 1)
Pedalreview.create(rating: 3, comment: Faker::Hacker.say_something_smart, pedal_id: 3, user_id: 1)

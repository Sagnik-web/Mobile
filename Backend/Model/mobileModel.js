const mongoose = require('mongoose')
const ObjId = mongoose.Types.ObjectId


const mobileSchema = new mongoose.Schema({
    name:{
        type: String,
        // required: true
    },
    price:{
        type: Number,
    },
    img_one:{
        type:String
    },
    img_two:{
        type:String
    },
    img_three:{
        type:String
    },
    img_four:{
        type:String
    },
    ram:{
        type: String,
    },
    processor:{
        type:String
    },
    front_camera:{
        type:String
    },
    search_front_camera:{
        type:String
    },
    rear_camera:{
        type:String
    },
    search_rear_camera:{
        type:String
    },
    battery:{
        type: String,
    },
    display:{
        type: String,
    },
    launch_date:{
        type:String
    },
    os:{
        type: String,
    },
    custom_ui:{
        type: String,
    },
    chipset:{
        type: String,
    },
    cpu:{
        type: String,
    },
    architecture:{
        type: String,
    },
    fabrication:{
        type: String,
    },
    graphics:{
        type: String,
    },
    ram_type:{
        type: String,
    },
    display_type:{
        type: String,
    },
    screen_size:{
        type: String,
    },
    
    aspect_ratio:{
        type: String,
    },
    pixel_density:{
        type: String,
    },
    screen_body_ratio:{
        type: String,
    },
    screen_protection:{
        type: String,
    },
    touch_screen:{
        type:String
    },
    brightness:{
        type:String
    },
    refresh_rate:{
        type:String
    },
    bezel_less_display:{
        type:String
    },
    height:{
        type:String
    },
    width:{
        type:String
    },
    thickness:{
        type:String
    },
    weight:{
        type:String
    },
    waterproof:{
        type:String
    },
    colours:{
        type:String
    },
    rare_camera_setup:{
        type:String
    },
    rare_resolution:{
        type: String,
    },
    autofocus:{
        type:String
    },
    flash:{
        type:String
    },
    image_resolution:{
        type:String
    },
    settings:{
        type:String
    },
    shooting_modes:{
        type:String
    },
    camera_features:{
        type:String
    },
    rare_video_recording:{
        type:String
    },

    front_camera_setup:{
        type:String
    },
    front_resolution:{
        type: String,
    },
    front_video_recording:{
        type:String
    },

    // battery_capacity:{
    //     type:String
    // },
    battery_type:{
        type:String
    },
    battery_removable:{
        type:String
    },
    battery_quick_charging:{
        type:String
    },
    usb_type_c:{
        type:String
    },
    internal_memory:{
        type:String
    },
    expandable_memory:{
        type:String
    },
    storage_type:{
        type:String
    },
    search_sim_slot:{
        type:String
    },
    sim_slot:{
        type:String
    },
    sim_size:{
        type:String
    },
    search_network_support:{
        type:String
    },
    network_support:{
        type:String
    },
    VoLTE:{
        type:String
    },
    wifi:{
        type:String
    },
    wifi_features:{
        type:String
    },
    bluetooth:{
        type:String
    },
    gps:{
        type:String
    },
    nfc:{
        type:String
    },
    usb_connectivity:{
        type:String
    },
    fm_radio:{
        type:String
    },
    loudspeaker:{
        type:String
    },
    audio_jack:{
        type:String
    },
    fingerprint_sensor:{
        type:String
    },
    fingerprint_sensor_position:{
        type:String
    },
    other_sensors:{
        type:String
    },
    userId:{
        type:ObjId,
        ref:'users'
    }

},{
    timestamps:true
})

const Mobile = mongoose.model('mobiles',mobileSchema)

module.exports = Mobile
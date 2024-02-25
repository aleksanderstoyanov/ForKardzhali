
const restaurants = {
    "mobi-dik": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.6586932057917!2d25.320718300000003!3d41.641508300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad7287d0acf233%3A0xd227b6502bf2a54d!2z0J_Qu9Cw0LLQsNGJINCg0LXRgdGC0L7RgNCw0L3RgiAi0JzQvtCx0Lgg0JTQuNC6IiDRj9C30L7QstC40YAg0JrRitGA0LTQttCw0LvQuA!5e0!3m2!1sbg!2sbg!4v1708612737521!5m2!1sbg!2sbg",
        phone: "036 163 606",
        monday_to_friday: "09:00 - 00:00",
        saturday_to_sunday: "09:00 - 00:00",
        facebook_link: "https://www.facebook.com/profile.php?id=100063767387371&sk=photos",
        facebook_title: "Плаващ Ресторант Моби Дик"
    },
    "starata-kushta": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.6291307826004!2d25.3701333!3d41.642147200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad721b216b20e1%3A0xbc507509d769374b!2z0KDQtdGB0YLQvtGA0LDQvdGCINCh0YLQsNGA0LDRgtCwINC60YrRidCw!5e0!3m2!1sbg!2sbg!4v1708613369579!5m2!1sbg!2sbg",
        phone: "036 162 884",
        monday_to_friday: "10:00 - 02:00",
        saturday_to_sunday: "10:00 - 02:00",
        facebook_link: "https://www.facebook.com/p/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%82-%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%82%D0%B0-%D0%BA%D1%8A%D1%89%D0%B0-100057143123207/?paipv=0&eav=AfbGiw7aI3mA87gYROvG2JgwAdnauASRvWYarp7tDi2Fcp0MYlBZM1-t31oXOzW0kt8&_rdr",
        facebook_title: "Ресторант Старата къща"
    },
    "robinzon": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.542606856737!2d25.379286!3d41.6440171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad7198af3de98b%3A0x7ea4d01883d1dfb5!2z0KDQvtCx0LjQvdC30L7QvQ!5e0!3m2!1sbg!2sbg!4v1708614085986!5m2!1sbg!2sbg",
        phone: "087 947 1662",
        monday_to_friday: "10:00 - 00:00",
        saturday_to_sunday: "10:00 - 00:00",
        facebook_link: "https://www.facebook.com/robinzon.kardzhali/?locale=bg_BG",
        facebook_title: "Ресторант Робинзон"
    },
    "emona": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.631481353529!2d25.320145599999996!3d41.6420964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad72f269c8af67%3A0x3f4c22f3b7ff238b!2z0JrQvtGA0LDQsS3RgNC10YHRgtC-0YDQsNC90YIg0JXQvNC-0L3QsA!5e0!3m2!1sbg!2sbg!4v1708679194081!5m2!1sbg!2sbg",
        phone: "087 855 0454",
        monday_to_friday: "09:30 - 01:00",
        saturday_to_sunday: "09:30 - 01:00",
        facebook_link: "https://www.facebook.com/korab.emona?locale=bg_BG",
        facebook_title: "Кораб ресторант Емона"
    }
};

const pastries =
{
    "orfei": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1051602277325!2d25.4116861!3d41.5236627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad77c7456d0465%3A0xd8528308671a77e9!2z0KHQu9Cw0LTQutCw0YDQvdC40YbQsCAi0J7RgNGE0LXQuSI!5e0!3m2!1sbg!2sbg!4v1708608309200!5m2!1sbg!2sbg",
        phone: "088 591 5309",
        monday_to_friday: "7:00 - 20:00",
        saturday_to_sunday: "7:00 - 20:00",
        facebook_link: "https://www.facebook.com/OrfeiSladkarnica",
        facebook_title: "Сладкарница Орфей"
    },
    "viena": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.9093504410025!2d25.373010200000003!3d41.63609079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad721ed297ade7%3A0x7de2521a901b5fda!2z0JrQsNGE0LUgLSDQodC70LDQtNC60LDRgNC90LjRhtCwINCS0JjQldCd0JA!5e0!3m2!1sbg!2sbg!4v1708609415537!5m2!1sbg!2sbg",
        phone: "036 161 198",
        monday_to_friday: "7:30 - 21:00",
        saturday_to_sunday: "7:30 - 21:00",
        facebook_link: "https://www.facebook.com/TortiViena/",
        facebook_title: "Торти Виена"
    },
    "merisimo": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.6758224915584!2d25.3731248!3d41.6411381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad73a8986a2d05%3A0x8b3e852f963342e4!2sMerisimo!5e0!3m2!1sbg!2sbg!4v1708612381588!5m2!1sbg!2sbg",
        phone: "088 560 8004",
        monday_to_friday: "7:00 - 22:00",
        saturday_to_sunday: "7:00 - 22:00",
        facebook_link: "https://www.facebook.com/merisimocakes",
        facebook_title: "Сладкарница Мерисимо"
    }
}

const clubs = {
    "friends": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.8029001366767!2d25.370796100000003!3d41.6383916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad721962569dbd%3A0xfae98047723e53d2!2sFriends%20bar%26dinner!5e0!3m2!1sbg!2sbg!4v1708676491694!5m2!1sbg!2sbg",
        phone: "089 689 7558",
        monday_to_friday: "8:00 - 02:00",
        saturday_to_sunday: "8:00 - 02:00",
        facebook_link: "https://www.facebook.com/friendskardzhali?locale=bg_BG",
        facebook_title: "Friends Bar & Dinner"
    },
    "vertu": {
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.100243840761!2d25.3576416!3d41.631964599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad7238d345031b%3A0x97a45a1c1a9e771e!2sVertu%20Bar%26dinner!5e0!3m2!1sbg!2sbg!4v1708677337206!5m2!1sbg!2sbg",
        phone: "089 588 7787",
        monday_to_friday: "9:00 - 01:00",
        saturday_to_sunday: "9:00 - 01:00",
        facebook_link: "https://www.facebook.com/profile.php?id=100063702034021&sk=photos",
        facebook_title: "VERTU Bar & Dinner"
    },
    "biblioteka":{
        google_api: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.544189386057!2d25.367943000000004!3d41.643982900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad72054be4cc59%3A0x1f5dece95f62aecb!2z0JrQsNGE0LUg0JHQuNCx0LvQuNC-0YLQtdC60LAgLyBCaWJsaW90aGVxdWUgQ2Fmw6g!5e0!3m2!1sbg!2sbg!4v1708680139966!5m2!1sbg!2sbg",
        phone: "089 588 7787",
        monday_to_friday: "08:00 - 22:30",
        saturday_to_sunday: "08:00 - 22:30",
        facebook_link: "https://www.facebook.com/pages/%D0%9A%D0%B0%D1%84%D0%B5-%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/380122368766265?locale=bg_BG",
        facebook_title: "Кафе клуб Библиотека"
    }
}

$(document).ready(function(){
    var detailsModal = $('#place-details');

    $(detailsModal).on("show.bs.modal", function(e){
        var parentContainerClass = $(e.relatedTarget).parents('.pastries, .restaurants, .clubs').attr("class").split(/\s+/)[0];
        var key = $(e.relatedTarget).attr("id");
        
        switch(parentContainerClass){
            case "restaurants":
                processPlaceDetails(restaurants, key);
                break;
            case "pastries":
                processPlaceDetails(pastries, key);
                break;
            case "clubs":
                processPlaceDetails(clubs, key);
                break;
        }
    })
})

function processPlaceDetails(places, key){
    const place = places[key];

    const mondayToFriday = place["monday_to_friday"];
    const saturdayToSunday = place["saturday_to_sunday"];

    const facebookLink = place["facebook_link"];
    const facebookTitle = place["facebook_title"];

    const googleApi = place["google_api"];

    const phone = place["phone"];


    $("#monday-to-friday").text(`(${mondayToFriday})`);
    $("#saturday-to-sunday").text(`(${saturdayToSunday})`);
    $("#phone").text(phone);

    $("#facebook-title").text(facebookTitle);
    $("#facebook-title").attr("href", facebookLink);

    $("#google-api").attr("src", googleApi);
}
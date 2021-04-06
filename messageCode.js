// Messages for announcements for study group

function sendMsg() {
    let request = new XMLHttpRequest();

    request.open("POST", "https://discord.com/api/webhooks/828930728874999808/MR01ansXCnS0p7bPbuwcsgBBC68OVaMkYqCkbAmMF6Y_SnC8vzY7LISKPUkmk5btPFFI")
    
    request.setRequestHeader("Content-type", "application/json");

    let params = {
        Username : "Pop Dog But He Is a Webhook",
        avatar_url : "",
        content : "|| @everyone || Announcement Made - Group Study Session Booked in Morning today. Time to be told be Ronak."

    }

    request.send(JSON.stringify(params));

    };
    function sendMsg2() {
    let request = new XMLHttpRequest();

    request.open("POST", "https://discord.com/api/webhooks/828930728874999808/MR01ansXCnS0p7bPbuwcsgBBC68OVaMkYqCkbAmMF6Y_SnC8vzY7LISKPUkmk5btPFFI")
    
    request.setRequestHeader("Content-type", "application/json");

    let params = {
        Username : "Pop Dog But He Is a Webhook",
        avatar_url : "",
        content : "|| @everyone || Announcement Made - Group Study Session Booked in Evening today. Time to be told by Ronak."

    }

    request.send(JSON.stringify(params));

    };

    function sendMsg3() {
    let request = new XMLHttpRequest();

    request.open("POST", "https://discord.com/api/webhooks/828930728874999808/MR01ansXCnS0p7bPbuwcsgBBC68OVaMkYqCkbAmMF6Y_SnC8vzY7LISKPUkmk5btPFFI")
    
    request.setRequestHeader("Content-type", "application/json");

    let params = {
        Username : "Pop Dog But He Is a Webhook",
        avatar_url : "",
        content : "|| @everyone || Announcement Made - Off topic session being held in the off topic voice channel. If you want to join, you are most welcome to do so."

    }

    request.send(JSON.stringify(params));

    };
    
    

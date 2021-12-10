var url = new URL('https://buibui.5xcampus.com/')
var params = {keyword:"衡陽"}

url.search = new URLSearchParams(params).toString();


fetch(url,{
        headers: {
            "Content-Type": "application/json",
            Latitude: 25.072583557667212, 
            Longitude: 121.59240305168562,
            Message: "kk",
        }
    }
    )
    .then(res => res.json())
    .then(data => console.log(data));

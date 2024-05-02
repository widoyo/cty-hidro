let url = "https://sdatelemetry.com/API_ap_telemetry/datatelemetry2.php?idbbws=8";
const json = await fetch(url).then(res => res.json())
console.log(json)
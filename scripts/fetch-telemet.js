import * as ch from 'cheerio';

let url = "https://elektronikapolban.duckdns.org:8081/telemet/telemet/tabel10";
const body = await fetch(url).then(res => res.text())

const $ = ch.load(body)
const rows = $('table')
console.log(rows.html());
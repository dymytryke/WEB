function clear() {
    document.getElementById('area').innerHTML = null;
    document.getElementById('diagonal').innerHTML = null;
    document.getElementById('perimeter').innerHTML = null;
    document.getElementById('results').style.flexDirection = 'row';
}

function calculate() {

    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;


    if ((height !== "" && width !== "") & (height >= 0 && width >= 0)) {
        var perimeter = 2 * width + 2 * height;
        var area = width * height;
        var diagonal = Math.sqrt(width ^ 2 + height ^ 2);
        document.getElementById('perimeter').innerHTML = "Периметр: " + perimeter;
        document.getElementById('area').innerHTML = "Площа: " + area;
        document.getElementById('diagonal').innerHTML = "Діагональ: " + diagonal;
        document.getElementById('error').innerHTML = null;
    } else if (height == "" || width == "") {
        document.getElementById('error').innerHTML = "Ви не ввели всі потрібні значення!";
        clear();
    } else {
        document.getElementById('error').innerHTML = "Значення не може бути від'ємним!";
        clear();
    }
}


function transliteration() {
    var word = document.getElementById('ukr').value;
    var answer = '';
    var converter = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y',
        'і': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ь': '`', 'ю': 'yu', 'я': 'ya',
        'ї': 'yi',

        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
        'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z', 'И': 'Y',
        'І': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
        'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '`', 'Ю': 'Yu', 'Я': 'Ya',
        'Ї': 'Yi'
    };

    for (var i = 0; i < word.length; ++i) {
        if (converter[word[i]] == undefined) {
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }
    document.getElementById('eng').value = answer;
}


function birtday(date) {
    var birtdate = new Date(date);
    const days = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];

    var res = days[birtdate.getDay() - 1];

    document.getElementById("res").innerHTML = "День тижня: " + res;

}

window.onload = images();


function images() {
    const imges = ["img1.png", "img2.png", "img3.png", "img4.png"];
    var img;
    for (var i = 0; i < imges.length; i++) {
        img = document.createElement('img');
        img.setAttribute("id", "img" + (i + 1));
        img.setAttribute("class", "smallimg");
        document.getElementById("images").appendChild(img);
        document.getElementById("img" + (i + 1)).setAttribute("src", imges[i]);
        document.getElementById("img" + (i + 1)).setAttribute("onclick", "transform(this.id)");
    }
}

function transform(id) {
    const imges = ["img1.png", "img2.png", "img3.png", "img4.png"];
    var img;
    document.getElementById(id).setAttribute("class", "bigimg");
    for (var i = 0; i < imges.length; i++) {
        if (id !== imges[i].slice(0,4)) {
            document.getElementById("img" + (i + 1)).setAttribute("class", "smallimg");
        }
    }
}





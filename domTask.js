function checkInfo() {
    if (document.getElementById('myId').value == '') {
        alert("Please Provide Details!");
        document.getElementById('myId');
        return false;
    } else {
        var date = new Date;
        var text1 = document.getElementById('myId').value;
        var parentElem = document.getElementById('feedback');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
            "<div class = container>" +
            "<div class='main-text'>" +
            "<div class='col-md-12'>" +
            "<p style='font-size: 17px'>" +
            "<br>" + text1 + "</p></div></div>" +
            "<div class='col-md-8'><span class='date'><br>" + date + "</span><p></div>" +
            "<div class='col-md-4'><span class='author'>" + 'FootballFan2000' + "</span></div>" +
            "</p><br></div><div class='col-md-12'><hr size ='5'/></div></div>";
        parentElem.appendChild(out);
        document.getElementById('myId').value = ''
    }
}
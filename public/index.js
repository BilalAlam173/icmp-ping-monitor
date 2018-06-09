let remove;
(function index() {

    function User(name, ip, startTime) {
        this.name = name;
        this.ip = ip;
        this.start = startTime;
    }

    const addBtn = document.getElementById('submit');
    const removeBtn = document.getElementById('remove');
    const nameField = document.getElementById('name');
    const ipField = document.getElementById('ip');
    const body = document.getElementById('body');
    let users = [];
    getUsers();

    addBtn.addEventListener('click', function () {
        var user = new User(nameField.value, ipField.value, new Date().getTime());
        users.push(user);
        addUser(user);
        body.insertAdjacentHTML('beforeend',
            `<tr class="loading" id="${users.length-1}">
        <td>${user.name}</td>
        <td>${user.ip}</td>
        <td id="status${users.length-1}">
          <span class="dot-loading"></span> awaiting response
          </td>
          <td id="uptime${users.length-1}">0</td>
        <td>
          <button class="btn btn-primary" data-id="${users.length-1}" id="remove">
            <i class="fa fa-window-close"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-edit"></i>
          </button>
        </td>
      </tr>`);
    })

    remove = function(elem){
        var id=$(elem).attr('data-id');
        $(`#${id}`).remove();
        var user = users[id];
        users.splice(id,1);
        deleteUser(user._id);
    }

    function deleteUser(id){
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", `/user/${id}`, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () { //Call a function when the state changes.
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status === 200) {
                window.alert('deleted')
            }
        }
        xhttp.send();
    }

    function addUser(user){
        var xhttp = new XMLHttpRequest();
        user.startTime = new Date().getTime();
        xhttp.open("POST", "/user", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () { //Call a function when the state changes.
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status === 200) {
                
            }
        }
        xhttp.send(JSON.stringify(user));
    }

    function getUsers(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/user", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () { //Call a function when the state changes.
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status === 200) {
                users= JSON.parse(xhttp.responseText); 
                populate();
            }
        }
        xhttp.send();
    }

    function populate(){
        for(var i=0;i<users.length;i++){
            var user = users[i];
            body.insertAdjacentHTML('beforeend',
            `<tr class="loading" id="${i}">
        <td>${user.name}</td>
        <td>${user.ip}</td>
        <td id="status${i}">
          <span class="dot-loading"></span> awaiting response
          </td>
          <td id="uptime${i}">0</td>
        <td>
          <button class="btn btn-primary">
            <i class="fa fa-window-close" onClick="remove(this)" data-id="${i}" id="remove"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-edit"></i>
          </button>
        </td>
      </tr>`);
        }
    }

    function ping(i) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/ping", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () { //Call a function when the state changes.
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                var tr = document.getElementById(`${i}`);
                if (xhttp.status === 200) {
                    if (tr.classList.contains('offline')) {
                        statusChange(i);
                        users[i].startTime = new Date().getTime();
                        tr.classList.remove('offline');
                    } else if(tr.classList.contains('loading')){
                        users[i].startTime = new Date().getTime();
                        tr.classList.remove('loading');
                    }
                    document.getElementById(`status${i}`).innerHTML = getStatus(true);
                    document.getElementById(`uptime${i}`).innerHTML = calculateUpTime(i);
                    calculateUpTime(i);
                    tr.classList.add('online');
                } else {
                    if (tr.classList.contains('online')) {
                        statusChange(i);
                        tr.classList.remove('online');
                    } else if(tr.classList.contains('loading')) {
                        users[i].startTime = new Date().getTime();
                        tr.classList.remove('loading');
                    }
                    document.getElementById(`status${i}`).innerHTML = getStatus(false);
                    tr.classList.add('offline');
                }
            }
        }
        xhttp.send(JSON.stringify(users[i]));
    }

    function statusChange(i) {
        window.alert('status changed for ' + i);
    }

    function calculateUpTime(i) {
        var now = new Date().getTime();
        var upTime = (now - users[i].startTime) / 1000;
        var unit = "s";
        if (upTime >= 60) {
            upTime /= 60;
            unit = 'm';
            if (upTime >= 60) {
                upTime /= 60;
                unit = "h"
                if (upTime >= 24) {
                    upTime /= 24;
                    unit = "d"
                    if (upTime >= 30) {
                        upTime /= 30;
                        unit = "mo"
                    }
                }
            }
        }
        return Math.round(upTime)+' '+ unit;
    }

    function getStatus(flag) {
        var status = flag ? 'dot-online' : 'dot-offline';
        var message = flag ? 'online ' : 'offline';
        return `<span class="${status}"></span> ${message}`;
    }

    setInterval(function () {
        if (users.length) {
            for (var i = 0; i < users.length; i++) {
                ping(i);
            }
        }

    }, 5000);
}())
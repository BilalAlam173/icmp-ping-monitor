(function index() {

    function User(name, ip, upTime) {
        this.name = name;
        this.ip = ip;
        this.upTime = upTime;
    }

    const addBtn = document.getElementById('submit');
    const nameField = document.getElementById('name');
    const ipField = document.getElementById('ip');
    const body = document.getElementById('body');

    let users = [];

    addBtn.addEventListener('click', function () {
        var user = new User(nameField.value, ipField.value, 0);
        users.push(user);
        body.insertAdjacentHTML('beforeend',
            `<tr class="loading" id="${users.length-1}">
        <td>${user.name}</td>
        <td>${user.ip}</td>
        <td id="status${users.length-1}">
          <span class="dot-loading"></span> awaiting response
          </td>
          <td id="uptime${users.length-1}">${user.upTime}</td>
        <td>
          <button class="btn btn-primary">
            <i class="fa fa-window-close"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-edit"></i>
          </button>
        </td>
      </tr>`);
    })

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
        users[i].upTime =Math.round(upTime);
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
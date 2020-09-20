let tool_menu = document.getElementById('tool_menu');
let twosquare = document.querySelectorAll('.twosquared');
let window_obj = document.querySelectorAll('.window');
let doors = document.querySelectorAll('.door');
let previous_bid = [];
let previous_name = [];

window_obj.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('rotated');
    });
});

doors.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('rotated');
    });
});

function bid_add(){
    let bid_namer = document.getElementById('bid_name');
    let bid_value = document.getElementById('bid_value');
    let content = document.getElementById('content');
    let new_bid = document.createElement('p');
    new_bid.textContent = 'Name: ' + bid_namer.value + ' / ' + 'Value: ' + bid_value.value;
    content.appendChild(new_bid);
    previous_bid.push(Number(bid_value.value));
    previous_name.push(bid_namer.value);

    for(let i = 0; i < previous_bid.length; i++){
        if(previous_bid[i] < Number(bid_value.value)){
            for(let j = 0; j < previous_name.length; j++){
                alert(previous_name[i] + ' was bid out');
            }
        }
    }

    bid_namer.value = '';
    bid_value.value = '';
}

function clicked(event) {
    let new_id = event.target.id;
    if(event.target.classList.contains('twosquared')){
        event.target.classList.toggle('rotated');
    }

    let obj = {
        table: {
            id: new_id,
            content: `this is information for table : ${new_id}`,
            actions: `<input type="text" id="bid_name"><input type="text" id="bid_value"><button type="button" id="add_new_bid" onclick="bid_add()">Bid</button>`
        }
    }

    if(obj.table.id === new_id){
        Swal.fire({
            icon: 'info',
            html: '<p id="content">' + obj.table.content + '</p><br>' + obj.table.actions ,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false
        })
    }else {
        Swal.fire({
            icon: 'error',
            html: '<p>No table found with this ID</p>',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false
        })
    }
}

function remove(event){
    event.target.remove();
}

function drag_start(event) {
    let style = window.getComputedStyle(event.target, null);
    let str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    let offset = event.dataTransfer.getData("Text").split(',');
    let dm = document.getElementById(offset[2]);
    if(dm.classList.contains('fa-square-full')){
        new_square();
    }else if(dm.classList.contains('fa-circle')){
        new_circle();
    }else if(dm.classList.contains('twosquared')){
        new_double_square();
        dm.setAttribute('data-target','#' + Math.floor(Math.random() * 10000));
    }else if(dm.classList.contains('window')){
        new_window();
    }else if(dm.classList.contains('door')){
        new_doors();
    }
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

// generating new element after drop
const new_square = () => {
    let new_el = document.createElement('i');
    new_el.setAttribute('class', 'fas fa-square-full drag_li');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_circle = () => {
    let new_el = document.createElement('i');
    new_el.setAttribute('class', 'fas fa-circle drag_li_c');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_double_square = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'twosquared');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('onclick', 'clicked(event)');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_window = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'window');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.textContent = 'WINDOW';
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_doors = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'door');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.textContent = 'DOORS';
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    tool_menu.appendChild(new_el);
}


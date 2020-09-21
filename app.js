let tool_menu = document.getElementById('tool_menu');
let previous_bid = [];
let previous_name = [];
let bid_namer = document.getElementById('bid_name');
let bid_value = document.getElementById('bid_value');
let select_slot = document.getElementById('sel1');

function bid_add(){
    let opt = select_slot.options[select_slot.selectedIndex];
    let booked5 = document.querySelector('.booked5');
    let name5 = document.querySelector('.name5');
    let bid5 = document.querySelector('.bid5');
    let booked7 = document.querySelector('.booked7');
    let name7 = document.querySelector('.name7');
    let bid7 = document.querySelector('.bid7');
    let booked9 = document.querySelector('.booked9');
    let name9 = document.querySelector('.name9');
    let bid9 = document.querySelector('.bid9');

    if(opt.value == '5'){
        booked5.innerHTML = 'Yes';
        name5.innerHTML = bid_namer.value;
        bid5.innerHTML = bid_value.value;
    }else if(opt.value == '7'){
        booked7.innerHTML = 'Yes';
        name7.innerHTML = bid_namer.value;
        bid7.innerHTML = bid_value.value;
    }else if(opt.value == '9'){
        booked9.innerHTML = 'Yes';
        name9.innerHTML = bid_namer.value;
        bid9.innerHTML = bid_value.value;
    }

    previous_bid.push(Number(bid_value.value));
    previous_name.push(bid_namer.value);

    // for(let i = 0; i < previous_bid.length; i++){
    //     if(previous_bid[i] < Number(bid_value.value)){
    //         for(let j = 0; j < previous_name.length; j++){
    //             alert(previous_name[i] + ' was bid out');
    //         }
    //     }
    // }

    bid_namer.value = '';
    bid_value.value = '';
}

function clicked(event) {
    let new_id = event.target.id;
    if(event.target.classList.contains('twosquared')){
        event.target.classList.toggle('rotated');
    }else if(event.target.classList.contains('window')){
        event.target.classList.toggle('rotated');
    }else if(event.target.classList.contains('door')){
        event.target.classList.toggle('rotated');
    }

    let obj = {
        table: {
            id: new_id,
            content: `this is information for table : ${new_id}`
        }
    }

    let table = '<table class="table">\n' +
        '  <thead>\n' +
        '    <tr>\n' +
        '      <th scope="col">Slots</th>\n' +
        '      <th scope="col">Booked</th>\n' +
        '      <th scope="col">Name</th>\n' +
        '      <th scope="col">Last Bid</th>\n' +
        '    </tr>\n' +
        '  </thead>\n' +
        '  <tbody>\n' +
        '    <tr class="slot_5">\n' +
        '      <th scope="row">5PM</th>\n' +
        '      <td class="booked5">No</td>\n' +
        '      <td class="name5">-</td>\n' +
        '      <td class="bid5">0</td>\n' +
        '    </tr>\n' +
        '    <tr class="slot_7">\n' +
        '      <th scope="row">7PM</th>\n' +
        '      <td class="booked7">No</td>\n' +
        '      <td class="name7">-</td>\n' +
        '      <td class="bid7">0</td>\n' +
        '    </tr>\n' +
        '    <tr class="slot_9">\n' +
        '      <th scope="row">9PM</th>\n' +
        '      <td class="booked9">No</td>\n' +
        '      <td class="name9">-</td>\n' +
        '      <td class="bid9">0</td>\n' +
        '    </tr>\n' +
        '  </tbody>\n' +
        '</table>';

    if(event.target.classList.contains('window') || event.target.classList.contains('door')){
        return false;
    }else {
        if(obj.table.id === new_id){
            Swal.fire({
                icon: 'info',
                html: '<p id="content">' + obj.table.content + '</p>' + table + '<br>' + '<button id="slot9" type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Book</button>',
                showCloseButton: true,
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
}

function drag_start(event) {
    event.target.style.cursor = 'grabbing';
    let style = window.getComputedStyle(event.target, null);
    let str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    event.target.style.cursor = 'grab';
    let offset = event.dataTransfer.getData("Text").split(',');
    let dm = document.getElementById(offset[2]);
    if(dm.classList.contains('fa-square-full')){
        new_square();
    }else if(dm.classList.contains('fa-circle')){
        new_circle();
    }else if(dm.classList.contains('twosquared')){
        new_double_square();
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
    new_el.setAttribute('onclick', 'clicked(event)');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_circle = () => {
    let new_el = document.createElement('i');
    new_el.setAttribute('class', 'fas fa-circle drag_li_c');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('onclick', 'clicked(event)');
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
    new_el.setAttribute('onclick', 'clicked(event)');
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
    new_el.setAttribute('onclick', 'clicked(event)');
    tool_menu.appendChild(new_el);
}


let tool_menu = document.getElementById('tool_menu');
let previous_bid = [];
let previous_name = [];
let bid_namer = document.getElementById('bid_name');
let bid_value = document.getElementById('bid_value');
let select_slot = document.getElementById('sel1');
let notification = document.querySelector('.notification');
let main_canvas = document.querySelector('.main_canvas');
let delete_all = document.getElementById('delete_obj');
let export_btn = document.getElementById('export');
let object_counts = 0;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.addEventListener('load', () => {
    
    if(localStorage.getItem('tutorial') == 'finished') {
        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = "Welcome in Table Maker";

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 2000);
    }else {
        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = "Tutorial for Table Maker started !";

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 2000);

        tippy('#square', {
            content: 'This is squared table',
            showOnCreate: true,
            animation: 'fase',
            onShow(instance) {
                setTimeout(() => {
                    instance.hide();
                    tippy('#circle', {
                        content: 'This is circle table',
                        showOnCreate: true,
                        animation: 'fase',
                        onShow(instance) {
                            setTimeout(() => {
                                instance.hide();
                                tippy('#twosquare', {
                                    content: 'This is double table',
                                    showOnCreate: true,
                                    animation: 'fase',
                                    onShow(instance) {
                                        setTimeout(() => {
                                            instance.hide();
                                            tippy('#window', {
                                                content: 'This is window',
                                                showOnCreate: true,
                                                animation: 'fase',
                                                onShow(instance) {
                                                    setTimeout(() => {
                                                        instance.hide();
                                                        tippy('#door', {
                                                            content: 'These are doors',
                                                            showOnCreate: true,
                                                            animation: 'fase',
                                                            onShow(instance) {
                                                                setTimeout(() => {
                                                                    instance.hide();
                                                                    tippy('#rota', {
                                                                        content: 'Use this arrow to rotate objects',
                                                                        showOnCreate: true,
                                                                        animation: 'fase',
                                                                        onShow(instance) {
                                                                            setTimeout(() => {
                                                                                instance.hide();
                                                                                tippy('#floor', {
                                                                                    content: 'This is restaurant floor',
                                                                                    showOnCreate: true,
                                                                                    animation: 'fase',
                                                                                    onShow(instance) {
                                                                                        setTimeout(() => {
                                                                                            instance.hide();
                                                                                            tippy('#tool_menu', {
                                                                                                content: 'Hold and move the objects to restaurant floor on the right side',
                                                                                                showOnCreate: true,
                                                                                                animation: 'fase',
                                                                                                onShow(instance) {
                                                                                                    setTimeout(() => {
                                                                                                        instance.hide();
                                                                                                        notification.style.opacity = "1";
                                                                                                        notification.style.transition = "all .5s ease";
                                                                                                        notification.textContent = "Tutorial Finished !";
                                                                                                        setTimeout(() => {
                                                                                                            notification.style.opacity = "0";
                                                                                                            notification.style.transition = "all .5s ease";
                                                                                                            notification.textContent = "";
                                                                                                        }, 2000);
                                                                                                        localStorage.setItem('tutorial', 'finished');
                                                                                                        setTimeout(() => {
                                                                                                            window.location = window.location;
                                                                                                        }, 2000);
                                                                                                    }, 5000);
                                                                                                }
                                                                                            });
                                                                                        }, 5000);
                                                                                    }
                                                                                });
                                                                            }, 5000);
                                                                        }
                                                                    });
                                                                }, 5000);
                                                            }
                                                        });
                                                    }, 5000);
                                                }
                                            });
                                        }, 5000);
                                    }
                                });
                            }, 5000);
                        }
                    });
                }, 5000);
            }
        });
    }
});

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

        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = `Table booked for ${bid_namer.value} with bid ${bid_value.value}€`;

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 2000);
    }else if(opt.value == '7'){
        booked7.innerHTML = 'Yes';
        name7.innerHTML = bid_namer.value;
        bid7.innerHTML = bid_value.value;

        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = `Table booked for ${bid_namer.value} with bid ${bid_value.value}€`;

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 2000);
    }else if(opt.value == '9'){
        booked9.innerHTML = 'Yes';
        name9.innerHTML = bid_namer.value;
        bid9.innerHTML = bid_value.value;

        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = `Table booked for ${bid_namer.value} with bid ${bid_value.value}€`;

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 2000);
    }

    previous_bid.push(Number(bid_value.value));
    previous_name.push(bid_namer.value);

    bid_namer.value = '';
    bid_value.value = '';
    $('#exampleModal').modal('hide');
}

function clicked(event) {
    let new_id = event.target.id;

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
                html: '<p id="content">' + obj.table.content + '</p>' + table + '<br>' + '<button id="slot9" type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Book</button><button id="prebook" type="button" data-toggle="modal" data-target="#exampleModal1" class="btn btn-success ml-3">Show Pre-booked meal</button>',
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

function rotate(event) {
    event.stopPropagation();
    let el = event.target.parentNode;
    if(el.classList.contains('twosquared')){
        el.classList.toggle('rotated');
    }else if(el.classList.contains('window')){
        el.classList.toggle('rotated');
    }else if(el.classList.contains('door')){
        el.classList.toggle('rotated');
    }else if(el.classList.contains('wall')){
        el.classList.toggle('rotated');
    }
}

function drag_start(event) {
    event.target.style.cursor = 'grabbing';
    let style = window.getComputedStyle(event.target, null);
    let str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
    event.target.setAttribute('onClick','clicked(event)');
    return false;
}

function drop(event) {
    event.target.style.cursor = 'grab';
    object_counts++;

    if(object_counts >= 5) {
        delete_all.style.opacity = "1";
        delete_all.style.transition = "all .5s ease";
        export_btn.style.opacity = "1";
        export_btn.style.transition = "all .5s ease";
    }

    let offset = event.dataTransfer.getData("Text").split(',');
    let dm = document.getElementById(offset[2]);

    let del = document.createElement('i');
    del.setAttribute('class', 'fas fa-times');
    del.setAttribute('onclick', 'deleteObject(event)');
    del.style.cursor = 'pointer';
    dm.appendChild(del);

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
    }else if(dm.classList.contains('wall')){
        new_wall();
    }

    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';

    notification.style.opacity = "1";
    notification.style.transition = "all .5s ease";
    if(dm.classList.contains('fa-square-full')) {
        notification.textContent = "Square Table added successfully";
    }else if(dm.classList.contains('fa-circle')){
        notification.textContent = "Circle Table added successfully";
    }else if(dm.classList.contains('twosquared')){
        notification.textContent = "Large Table added successfully";
    }else if(dm.classList.contains('window')){
        notification.textContent = "Window added successfully";
    }else if(dm.classList.contains('door')){
        notification.textContent = "Doors added successfully";
    }else if(dm.classList.contains('wall')){
        notification.textContent = "Wall added successfully";
    }

    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "all .5s ease";
        notification.textContent = "";
    }, 2000);

    event.preventDefault();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    return false;
}

function deleteObject(event) {
    event.stopPropagation();
    let el = event.target.parentNode;
    el.remove();

    notification.style.opacity = "1";
    notification.style.transition = "all .5s ease";
    notification.style.border = "1px solid red";
    notification.textContent = `Object with ID: ${event.target.parentNode.id} was deleted !`;

    object_counts--;
    
    if(object_counts < 5) {
        delete_all.style.opacity = "0";
        delete_all.style.transition = "all .5s ease";
        export_btn.style.opacity = "0";
        export_btn.style.transition = "all .5s ease";
    }

    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "all .5s ease";
        notification.style.border = "";
        notification.textContent = "";
    }, 2000);
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
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_circle = () => {
    let new_el = document.createElement('i');
    new_el.setAttribute('class', 'fas fa-circle drag_li_c');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);
}

// generating new element after drop
const new_double_square = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'twosquared');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);

    let rotate_arrow = document.createElement('i');
    rotate_arrow.setAttribute('class', 'fas fa-undo');
    rotate_arrow.setAttribute('onclick', 'rotate(event)');
    rotate_arrow.setAttribute('data-toggle', 'tooltip');
    rotate_arrow.setAttribute('data-placement', 'top');
    rotate_arrow.setAttribute('title', 'Rotate Double Table');
    new_el.setAttribute('data-all','true');
    new_el.appendChild(rotate_arrow);
}

// generating new element after drop
const new_window = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'window');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.textContent = 'WINDOW';
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);

    let rotate_arrow = document.createElement('i');
    rotate_arrow.setAttribute('class', 'fas fa-undo');
    rotate_arrow.setAttribute('onclick', 'rotate(event)');
    rotate_arrow.setAttribute('data-toggle', 'tooltip');
    rotate_arrow.setAttribute('data-placement', 'top');
    rotate_arrow.setAttribute('title', 'Rotate Window');
    new_el.appendChild(rotate_arrow);
}

// generating new element after drop
const new_doors = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'door');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.textContent = 'DOORS';
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);

    let rotate_arrow = document.createElement('i');
    rotate_arrow.setAttribute('class', 'fas fa-undo');
    rotate_arrow.setAttribute('onclick', 'rotate(event)');
    rotate_arrow.setAttribute('data-toggle', 'tooltip');
    rotate_arrow.setAttribute('data-placement', 'top');
    rotate_arrow.setAttribute('title', 'Rotate Doors');
    new_el.appendChild(rotate_arrow);
}

// generating new element after drop
const new_wall = () => {
    let new_el = document.createElement('div');
    new_el.setAttribute('class', 'wall');
    new_el.setAttribute('id', Math.floor(Math.random() * 1000));
    new_el.textContent = 'WALL';
    new_el.setAttribute('draggable', 'true');
    new_el.setAttribute('ondragstart', 'drag_start(event)');
    new_el.setAttribute('data-all','true');
    tool_menu.appendChild(new_el);

    let rotate_arrow = document.createElement('i');
    rotate_arrow.setAttribute('class', 'fas fa-undo');
    rotate_arrow.setAttribute('onclick', 'rotate(event)');
    rotate_arrow.setAttribute('data-toggle', 'tooltip');
    rotate_arrow.setAttribute('data-placement', 'top');
    rotate_arrow.setAttribute('title', 'Rotate Doors');
    new_el.appendChild(rotate_arrow);
}

delete_all.addEventListener('click', e => {
    if(delete_all.style.opacity == "1"){
        let all_restaurant_elements = document.querySelectorAll('[data-all]');
        let start_elements = document.querySelectorAll('[data-all-init]');
        all_restaurant_elements.forEach(el => {
            // let observer = new MutationObserver(mutations => {
            //     mutations.forEach(mutation => {
            //         console.log(mutation);
            //     });
            // });

            // let config = {
            //     childList: true
            // }

            // observer.observe(tool_menu, config);
            el.remove();

            start_elements.forEach(start => {
                start.removeAttribute('style');
                start.removeAttribute('onclick');
                document.querySelectorAll('.fa-times').forEach(x => {
                    x.remove();
                })
            });
        });

        delete_all.style.opacity = "0";
        delete_all.style.transition = "all .5s ease";
        export_btn.style.opacity = "0";
        export_btn.style.transition = "all .5s ease";

        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = "All restaurant objects were deleted!";
        notification.style.border = "1px solid red";
        
        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.style.border = "";
            notification.textContent = "";
        }, 3000);

        object_counts = 0;
    }else {
        console.log('err deleting');
    }
});


export_btn.addEventListener('click', e => {
    if(export_btn.style.opacity == "1"){
        html2canvas(document.getElementById('wrapper')).then(canvas => {
            const base64image = canvas.toDataURL("image/png");
            let export_img = document.createElement('a');
            export_img.setAttribute('href', base64image);
            export_img.download = "exported_floor.png";
            export_img.click();
        });

        notification.style.opacity = "1";
        notification.style.transition = "all .5s ease";
        notification.textContent = "Restaurant floor exported.";
        
        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transition = "all .5s ease";
            notification.textContent = "";
        }, 3000);
    }else {
        console.log('err exporting');
    }
});
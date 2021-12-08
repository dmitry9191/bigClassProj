const drop = () => {
    // dragenter - объект над dropArea
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // drop - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files; // dataTransfer - объект, хранящий передающиеся файлы, .files - св-во в котором непосредственно хранятся файлы
            
            let dots;
            const arr =  input.files[0].name.split('.');

            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];

           input.previousElementSibling.textContent = name;
        });
    });

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        
        if (item.closest('.calc-form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff"
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }

    }

};

export default drop;   
document.write('<input type="file" name="files[]" id="fileUpload">\
<script type="text/javascript">\
        (function() {\
            var FILE_KEY = "save.json";\
            // fire processUpload when the user uploads a file\
            document.querySelector("#fileUpload").addEventListener("change", handleFileUpload, false);\
            // Log any previously saved file.\
            console.log("previous save: ", retrieveSave());\
            // Setup file reading\
            var reader = new FileReader();\
            reader.onload = handleFileRead;\
            function handleFileUpload(event) {\
                var file = event.target.files[0];\
                reader.readAsText(file); // fires onload when done.\
            }\
            function handleFileRead(event) {\
                var save = JSON.parse(event.target.result);\
                console.log(save) // {hp: 32, maxHp: 50, mp: 11, maxMp: 23}\
                window.localStorage.setItem(FILE_KEY, JSON.stringify(save));\
            }\
            function retrieveSave() {\
                return JSON.parse(localStorage.getItem(FILE_KEY))\
            }\
        })();\
</script>\
');
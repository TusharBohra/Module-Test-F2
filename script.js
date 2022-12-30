fetch('./MOCK_DATA.json')
        .then(function (response)  {
            return response.json();
        })
        .then(function (MOCK_DATA){
            let placeholder = document.querySelector("#data");
            let out ="";
            for(let x of MOCK_DATA){
                                   
                out += `
                <tr>
                    <td>${x.id}</td>
                    <td ><img src='${x.img_src}'>
                        ${x.first_name} ${ x.last_name}</td>
                    <td>${x.gender}</td>
                    <td>${x.class}</td>
                    <td>${x.marks}</td>
                    <td>${x.passing}</td>
                    <td>${x.email}</td>    
                </tr>
                `;
            }   
       
        placeholder.innerHTML = out;
    });


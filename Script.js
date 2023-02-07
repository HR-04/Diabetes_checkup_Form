const outputEl = document.getElementById('output')
const formEl = document.querySelector('.detail')
      
      formEl.addEventListener('submit',event => {
        event.preventDefault();

        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);
        console.log(data)
        fetch('http://127.0.0.1:5000/userDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        }).then(res => res.json())
          .then(data =>outputEl.innerText= data)
          .catch(error => console.log(error));
        });

      

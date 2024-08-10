document.querySelector('#dog').addEventListener('click',function(){
    
        $.ajax({
            method: "GET",
            url: "https://meowfacts.herokuapp.com/?lang=kor-ko",
        })
        .done(function (data) {
            let fact = data.data[0]
            $('#facts').append(`<li>${fact}</li>`)                
        })   
    
})
  
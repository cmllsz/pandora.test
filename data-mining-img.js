let img = $('img').text(),
    output_img = []
;


text.split(' ').forEach(element => {
    // se l'elemento non è una stringa vuota e non è un \n
    if(element.replace(/(\r\n|\n|\r)/gm, "").length)
    {
        output_img.push(element)
    }
});

//console.log(random_length)

$('body').on('click', '.stampa-imgg', function () {

    // prendo un numero a caso che sia dentro la lunghezza dell'array
   let random_index = parseInt(Math.random() * ((output_img.length - 20) - 0))
    
    // lunghezza di parole randomica fra 3 5
    let random_length = parseInt(Math.random() * (1),
    string_outout = '')
    ;
    

    // inizializza i a 0. ad ogni fine ciclo aumentalo di 1 ed esci dal ciclo quando i diventa più grande di random_length
    // sapendo che random_length è al massimo 5
    for(let i = 0;  i < random_length; i++)
    {
        string_outout += output_img[random_index + i];
        if(i)
        {
            string_outout += ' ';
        }
        // automaticamente il for aumenta di 1 la variabile i
    }
    // alert(string_outout)

    $('#animateimg').html(string_outout).animate();

   
})



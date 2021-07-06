let text = $('body').text(),
    output_text = []
;


text.split(' ').forEach(element => {
    // se l'elemento non è una stringa vuota e non è un \n
    if(element.replace(/(\r\n|\n|\r)/gm, "").length)
    {
        output_text.unshift(element)
    }
});

// console.log('helllooooo')
// console.log(random_length)

// console.log(output_text[4] + ' ' + output_text[5] + ' ' + output_text[6])

$('body').on('click', '.stampa-parrrr', function () {

    // prendo un numero a caso che sia dentro la lunghezza dell'array
   let random_index = parseInt(Math.random() * ((output_text.length - 20) - 0))
    
    // lunghezza di parole randomica fra 3 5
    let random_length = parseInt(Math.random() * (6  - 3) + 3),
    string_outout = ''
    ;
    

    // inizializza i a 0. ad ogni fine ciclo aumentalo di 1 ed esci dal ciclo quando i diventa più grande di random_length
    // sapendo che random_length è al massimo 5
    for(let i = 0;  i < random_length; i++)
    {
        string_outout += output_text[random_index + i];
        if(i)
        {
            string_outout += ' ';
        }
        // automaticamente il for aumenta di 1 la variabile i
    }
    // alert(string_outout)

    $('#animate').html(string_outout).animate();

   
})



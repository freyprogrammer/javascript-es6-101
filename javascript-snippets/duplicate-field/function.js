function duplicateField(wrapper, add_button, section, id_name){

    let initial_field    = 1; //initlal text box count
    let max_fields       = 7; //maximum input boxes allowed
    
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(initial_field < max_fields){ //max input box allowed
            initial_field++; //text box increment
            $(wrapper).append(`<div class="kt-wizard-v4__form" id="${id_name}${initial_field}">
            ${section}
            <button type="button" class="btn btn-label-danger btn-bold btn-sm kt-margin-t-5 kt-margin-b-5 remove_employment"><i class="flaticon-close">
            </i>Remove Employment</button>
        </div>`); //add input box
        
        //Scroll Animation on Added Fields
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#'+id_name+initial_field+'').offset().top-150
        }, 1500);

        } else {
            alert("You hit the max number of entry")
        }
    });
    
    //Remove Added Field
    $(wrapper).on("click",".remove_employment", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).parent('div').fadeOut(300, function(){ 
            $(this).remove();
        });
        // $(this).parent('div').remove();
        initial_field--;
    });

}

export { duplicateField };

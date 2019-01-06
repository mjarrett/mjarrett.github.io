console.log(code_show);

function toggle_setup() {
if (typeof code_show == 'undefined') {
    code_show = true
} else {
    code_show = false
}

}



function code_toggle() {
    console.log('code_toggle');
    console.log(code_show);

    if (!code_show){
	$('div.input').hide();
	$('div.prompt.output_prompt').hide();
    } else {
	$('div.input').show();
    }
 code_show = !code_show
}

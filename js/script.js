$(document).ready(function(){
  let firstSelect = false;
  let secondSelect = false;
  let thirdSelect = false;
  let counter = 0;
  $('#edit select').change(function(){
    $('#edit select option[value="0"]').attr('disabled', 'disabled');
    let obj = $(this);
    let objName = $(this).attr('name');
    let objselected = $(this).val();
    obj.addClass('changed');
    counter = counter + 1;
    switch(objName) {
        case 'first':
          firstSelect = true;
          break;
        case 'second':
          secondSelect = true;
          break;
        case 'third':
          thirdSelect = true;
          break;
        default:
          alert('Error');
    }
    if (counter == 1) {
      obj.siblings().find('option[value="' + objselected + '"]').attr('disabled', 'disabled');
    }  
    if (counter == 2) {
      if (thirdSelect == false) {
        $('select[name="third"] option[value="' + objselected + '"]').attr('disabled', 'disabled');
        let x = $("select[name='third']").find('option:not(:disabled)').val();
        $("select[name='third']").val(x).trigger('change');
      } 
      else if (secondSelect == false) {
        $('select[name="second"] option[value="' + objselected + '"]').attr('disabled', 'disabled');
        let x = $("select[name='second']").find('option:not(:disabled)').val();
        $("select[name='second']").val(x).trigger('change');
      } else if (firstSelect == false) {
        $('select[name="first"] option[value="' + objselected + '"]').attr('disabled', 'disabled');
        let x = $("select[name='first']").find('option:not(:disabled)').val();
        $("select[name='first']").val(x).trigger('change');
      }
    }
  });
});

$(document).ready(function(){
    ajax_call();
});

var sname = [];
var fv = [];

function ajax_call()
{
  $.ajax({
      url   : "../php/symptom_description.php",
      type  : "POST",
      success: function(data)
      {
          make_array(data); // 🔥 ONLY ONE SOURCE NOW
      }
  });
}

function make_array(str)
{
    var ar = str.split('|').filter(item => item.trim() !== "");

    for (var i = 0; i < ar.length; i++) {

        var ind = ar[i].indexOf(',');

        sname[i] = ar[i].substring(0, ind);

        fv[i] = ar[i]
                .substring(ind + 1)
                .split(',');

    }

    show();
}

function show()
{
    var tb1 = '<div><table class="table table-responsive table-bordered"><thead><tr><th>Symptom</th><th>Value</th><th>Symptom Description</th></tr></thead><tbody>';
    var tb2 = '</tbody></table></div>';

    for (var i = 0; i < sname.length; i++) {

        var box = '<tr><td class="sname">'+sname[i]+' :- </td>';

        box += '<td><select class="form-control" id="s'+i+'">';

        for (var j = 0; j < fv[i].length; j++) {
            box += '<option value="'+fv[i][j]+'">'+fv[i][j]+'</option>';
        }

        box += '</select></td>';

        // 🔥 Convert fuzzy values to readable text
        var descArr = fv[i].map(function(val) {
            switch(val) {
                case "VL": return "Very Low";
                case "L": return "Low";
                case "M": return "Medium";
                case "H": return "High";
                case "VH": return "Very High";
                default: return val;
            }
        });

        var desc = descArr.join(", ");

        box += '<td>'+ desc +'</td></tr>';

        tb1 += box;
    }

    $("#add_here").html(tb1 + tb2); // 🔥 NO DUPLICATION
}

var json;

function make_string()
{
    var str = '';

    for (var i = 0; i < sname.length; i++) {

        str += sname[i] + ',' + $("#s"+i).val();

        if(i !== sname.length - 1)
            str += '|';
    }

    console.log(str);

    $.ajax({
        url   : "../php/evaluate.php",
        type  : "POST",
        dataType : "json",
        data  : {
                  "str" : str ,
                },
        success: function(data)
        {
            json = data;
            window.open("../html/result.php", "Result");
        }
    });
}

function getJSON(){
    return json;
}